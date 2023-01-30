import { Section } from './Section'
import ExampleSection from '../sections/ExampleSection/ExampleSection'
import SliderSection from '../sections/SliderSection/SliderSection'
import GallerySection from '../sections/GallerySection/GallerySection'
import JumbotronSection from '../sections/JumbotronSection/JumbotronSection'
import TextFieldSection from '../sections/TextFieldSection/TextFieldSection'
import SocialMediaSection from '../sections/SocialMediaSection/SocialMediaSection'
import Page from '../components/organisms/Page/Page'
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout'
import { Layout } from './Layout'
import DarkLayout from '../layouts/DarkLayout/DarkLayout'

import { NetworkController } from './NetworkController/NetworkController'

class Application {
	#db
	#sections = []
	#routes = []
	#layouts = []
	#layout
	#reactRouterRoutes = []

	get reactRouterRoutes() {
		return this.#reactRouterRoutes
	}

	get routes() {
		return this.#routes
	}

	get layout() {
		return this.#layout
	}

	get currentRoute() {
		return this.#routes.find(route => route.path === window.location.pathname)
	}

	init() {
		this.readyToAddSections()
		this.readyToAddLayouts()
		this.setLayout()
		this.setReactRouterRoutes()
		this.setRoutes()
		this.setMeta()
	}

	readyToAddSections() {
		this.#sections.push(new Section('example_section', ExampleSection))
		this.#sections.push(new Section('slider_section', SliderSection))
		this.#sections.push(new Section('gallery_section', GallerySection))
		this.#sections.push(new Section('jumbotron_section', JumbotronSection))
		this.#sections.push(new Section('textfield_section', TextFieldSection))
		this.#sections.push(new Section('social_media_section', SocialMediaSection))
	}

	readyToAddLayouts() {
		this.#layouts.push(new Layout('theme-default', DefaultLayout))
		this.#layouts.push(new Layout('theme-dark', DarkLayout))
	}

	async getData() {
		const network = new NetworkController()
		const settings = await network.getSettings()
		const pages = await network.getPages()
		console.log(settings.data)
		console.log(pages.data)
		this.#db = {
			layout: {
				alias: settings.data[0].layout.theme,
			},
			subpages: pages.data.map(page => ({
				meta: {
					name: page.name,
					path: page.path,
					title: page.title,
					description: page.description,
				},
				value: page.value,
			})),
		}
		console.log(this.#db)
		// this.#db = await network.getDatabase()
		return this.#db
	}

	setRouter(router) {
		this.router = router
	}

	setReactRouterRoutes() {
		this.#reactRouterRoutes = this.#db.subpages.map(page => {
			const Layout = this.layout.component
			return {
				path: page.meta.path,
				element: <Layout><Page sections={this.getSections(page.meta.path)} /></Layout>,
			}
		})
	}

	getSections(pagePath) {
		return this.#db.subpages.find(page => page.meta.path === pagePath).value.sections?.map(section => {
			return {
				value: section,
				component: this.#sections.find(entitySection => entitySection.alias === section.alias)?.component,
			}
		})
	}

	setRoutes() {
		this.#routes = this.#db.subpages.map(page => page.meta)
	}

	setLayout() {
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