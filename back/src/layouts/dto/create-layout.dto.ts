import { Layout } from '../types'
import { ApiProperty } from '@nestjs/swagger'

export class CreateLayoutDto implements Layout {
	@ApiProperty()
	alias: string

	@ApiProperty()
	name: string

	@ApiProperty()
	primaryBackgroundColor: string

	@ApiProperty()
	primaryColor: string

	@ApiProperty()
	primaryLightColor: string

	@ApiProperty()
	secondaryBackgroundColor: string

	@ApiProperty()
	secondaryColor: string

	@ApiProperty()
	secondaryLightColor: string

	@ApiProperty()
	isDefault: boolean
}
