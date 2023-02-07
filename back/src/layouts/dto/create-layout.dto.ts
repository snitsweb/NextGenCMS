import { Layout } from '../types'

export class CreateLayoutDto implements Layout {
	alias: string
	name: string
	primaryBackgroundColor: string
	primaryColor: string
	primaryLightColor: string
	secondaryBackgroundColor: string
	secondaryColor: string
	secondaryLightColor: string
	isDefault: boolean
}
