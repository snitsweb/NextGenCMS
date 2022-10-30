import {Section} from './Section'
import ExampleSection from '../sections/ExampleSection/ExampleSection'
import SliderSection from '../sections/SliderSection/SliderSection'
import GallerySection from '../sections/GallerySection/GallerySection'
import {getDatabase} from './database'
import HomePage from '../pages/HomePage'

class Application {
	#_sections = []
	#_pages = []

	constructor () {
		this.init()
	}

	get sections () {
		return this.#_sections
	}

	get pages () {
		return this.#_pages
	}

	init() {
		this.readyToAddSections()
		this.getData()
	}

	readyToAddSections () {
		this.#_sections.push(new Section('example_section', ExampleSection))
		this.#_sections.push(new Section('slider_section', SliderSection))
		this.#_sections.push(new Section('gallery_section', GallerySection))
	}

	getData () {
		this.db = getDatabase()
	}

	setRouter (router) {
		this.router = router
	}

	getSections (pagePath) {
		return this.db.pages.find(page => page.meta.path === pagePath).value.sections.map(section => {
			return {
				value: section.value,
				component: this.#_sections.find(entitySection => entitySection.alias === section.alias)?.component
			}
		})
	}

	getRoutes () {
		return this.db.pages.map(page => {
			return {
				path: page.meta.path,
				element: <HomePage sections={this.getSections(page.meta.path)} />
			}
		})
	}
}

export default Application