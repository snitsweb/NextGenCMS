import {Section} from './Section'
import ExampleSection from '../sections/ExampleSection/ExampleSection'
import SliderSection from '../sections/SliderSection/SliderSection'
import GallerySection from '../sections/GallerySection/GallerySection'
import {getDatabase} from './database'
import Page from '../components/organisms/Page/Page'
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout'

class Application {
	#db
	#sections = []
	#pages = []
	#routes = []
	#reactRouterRoutes = []

	get reactRouterRoutes () {
		return this.#reactRouterRoutes
	}

	get routes () {
		return this.#routes
	}

	get sections () {
		return this.#sections
	}

	get pages () {
		return this.#pages
	}

	constructor () {
		this.init()
	}

	init() {
		this.readyToAddSections()
		this.getData()
		this.setReactRouterRoutes()
		this.setRoutes()
	}

	readyToAddSections () {
		this.#sections.push(new Section('example_section', ExampleSection))
		this.#sections.push(new Section('slider_section', SliderSection))
		this.#sections.push(new Section('gallery_section', GallerySection))
	}

	getData () {
		this.#db = getDatabase()
	}

	setRouter (router) {
		this.router = router
	}

	setReactRouterRoutes () {
		this.#reactRouterRoutes = this.#db.pages.map(page => {
			return {
				path: page.meta.path,
				element: <DefaultLayout><Page sections={this.getSections(page.meta.path)} /></DefaultLayout>
			}
		})
	}

	getSections (pagePath) {
		return this.#db.pages.find(page => page.meta.path === pagePath).value.sections.map(section => {
			return {
				value: section.value,
				component: this.#sections.find(entitySection => entitySection.alias === section.alias)?.component
			}
		})
	}

	setRoutes () {
		this.#routes = this.#db.pages.map(page => page.meta)
	}
}

export default Application