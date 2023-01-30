import { Section } from '@modules/Pages/core/SectionsController/Section'


interface Image {
	alt: string,
	image: string,
	title: string
}

export class SliderSection extends Section {
	value: {
		slides: Image[]
	}

	setSlides(images: Image[]) {
		this.value.slides = images
	}

	addSlide(image: Image) {
		this.value.slides.push(image)
	}
}