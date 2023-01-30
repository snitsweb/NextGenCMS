import { Section } from '@modules/Pages/core/SectionsController/Section'

interface SocialItem {
	icon: string,
	header: string,
	preview: string
}

export class SocialMediaSection extends Section {
	value: {
		links: SocialItem[],
		header: string
	}

	addSocialItem(social: SocialItem) {
		this.value.links.push(social)
	}

	setSocialItems(socials: SocialItem[]) {
		this.value.links = socials
	}

	setHeader(header: string) {
		this.value.header = header
	}
}