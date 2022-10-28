import {Section} from './Section'
import ExampleSection from '../sections/ExampleSection'

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
	}

	readyToAddSections () {
		this.#_sections.push(new Section('example_section', ExampleSection))
	}

	getSection (alias) {
		const section =  this.#_sections.find(section => section.alias === alias)

		if (section) {
			return section.component
		} else {
			console.error(`Can't find section with alias: ${alias}`)
			return null
		}
	}
}

export default Application