import { Section } from '@modules/Pages/core/SectionsController/Section'

export class TextfieldSection extends Section {
	value: {
		header: string,
		description: string
	}

	setHeader(header: string) {
		this.value.header = header
	}

	setDescription(description: string) {
		this.value.description = description
	}
}