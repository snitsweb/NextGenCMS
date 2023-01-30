import { Section } from '@modules/Pages/core/SectionsController/Section'

interface Image {
	alt: string,
	image: string,
	title: string
}

export class GallerySection extends Section {
	value: {
		images: Image[]
	}

	setImages(images: Image[]) {
		this.value.images = images
	}

	addImage(image: Image) {
		this.value.images.push(image)
	}
}