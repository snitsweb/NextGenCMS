import { GallerySection } from '@modules/Pages/core/SectionsController/sections/GallerySection'
import { Section } from '@modules/Pages/core/SectionsController/Section'
import { JumbotronSection } from '@modules/Pages/core/SectionsController/sections/JumbotronSection'
import { SliderSection } from '@modules/Pages/core/SectionsController/sections/SliderSection'
import { SocialMediaSection } from '@modules/Pages/core/SectionsController/sections/SocialMediaSection'
import { TextfieldSection } from '@modules/Pages/core/SectionsController/sections/TextfieldSection'

export class SectionsController {

	sections: {
		alias: string,
		constructor: typeof Section
	}[] = []

	constructor() {
		this.init()
	}

	init() {
		this.addSections()
	}

	addSections() {
		this.sections.push({
			alias: 'gallery_section',
			constructor: GallerySection,
		})
		this.sections.push({
			alias: 'jumbotron_section',
			constructor: JumbotronSection,
		})
		this.sections.push({
			alias: 'slider_section',
			constructor: SliderSection,
		})
		this.sections.push({
			alias: 'social_media_section',
			constructor: SocialMediaSection,
		})
		this.sections.push({
			alias: 'textfield_section',
			constructor: TextfieldSection,
		})
	}
}