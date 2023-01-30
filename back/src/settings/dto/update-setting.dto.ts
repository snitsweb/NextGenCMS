import { PartialType } from '@nestjs/mapped-types'
import { CreateSettingDto } from './create-setting.dto'

export class UpdateSettingDto extends PartialType(CreateSettingDto) {
	socials: {
		id: string
		name: string
		href: string
		image: string
	}[]
}
