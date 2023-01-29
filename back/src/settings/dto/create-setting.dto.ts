export class CreateSettingDto {
	layout: {
		theme: string
	}
	socials: {
		name: string
		href: string
		image: string
	}[]
}
