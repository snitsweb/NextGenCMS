import { Section } from '@modules/Pages/core/SectionsController/Section'

interface Image {
	alt: string,
	image: string,
	title: string
}

export class JumbotronSection extends Section {
	value: {
		image: Image,
		header: string,
		description: string
	}

	setImage(image: Image) {
		this.value.image = image
	}

	setHeader(header: string) {
		this.value.header = header
	}

	setDescription(description: string) {
		this.value.description = description
	}
}