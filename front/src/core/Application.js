import {Section} from './Section'
import ExampleSection from '../sections/ExampleSection/ExampleSection'
import SliderSection from '../sections/SliderSection/SliderSection'
import GallerySection from '../sections/GallerySection/GallerySection'
import JumbotronSection from '../sections/JumbotronSection/JumbotronSection'
import TextFieldSection from '../sections/TextFieldSection/TextFieldSection'
import {getDatabase} from './database'
import Page from '../components/organisms/Page/Page'
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout'
import {Layout} from './Layout'
import DarkLayout from '../layouts/DarkLayout/DarkLayout'

class Application {
	#db
	#sections = []
	#routes = []
	#layouts = []
	#layout
	#reactRouterRoutes = []

	constructor () {
		this.init()
	}

	get reactRouterRoutes () {
		return this.#reactRouterRoutes
	}

	get routes () {
		return this.#routes
	}

	get layout () {
		return this.#layout
	}

	get currentRoute () {
		return this.#routes.find(route => route.path === window.location.pathname)
	}

	init() {
		this.readyToAddSections()
		this.readyToAddLayouts()
		this.getData()
		this.setLayout()
		this.setReactRouterRoutes()
		this.setRoutes()
		this.setMeta()
	}

	readyToAddSections () {
		this.#sections.push(new Section('example_section', ExampleSection))
		this.#sections.push(new Section('slider_section', SliderSection))
		this.#sections.push(new Section('gallery_section', GallerySection))
		this.#sections.push(new Section('jumbotron_section', JumbotronSection))
		this.#sections.push(new Section('textfield_section', TextFieldSection))
	}

	readyToAddLayouts () {
		this.#layouts.push(new Layout('theme-default', DefaultLayout))
		this.#layouts.push(new Layout('theme-dark', DarkLayout))
	}

	getData () {
		this.#db = getDatabase()
	}

	setRouter (router) {
		this.router = router
	}

	setReactRouterRoutes () {
		this.#reactRouterRoutes = this.#db.pages.map(page => {
			const Layout = this.layout.component
			return {
				path: page.meta.path,
				element: <Layout><Page sections={this.getSections(page.meta.path)} /></Layout>
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

	setLayout () {
		const layout = this.#layouts.find(layout => layout.alias === this.#db.layout?.alias) ||
			this.#layouts.find(layout => layout.alias === 'theme-default')

		if (!layout) throw new Error('Can not set layout!')

		this.#layout = layout
	}

	setMeta() {
		document.title = this.currentRoute.title
		document.querySelector('meta[name="description"]').setAttribute('content', this.currentRoute.description)
	}
}

export default Application