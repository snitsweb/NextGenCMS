import { ApiProperty } from '@nestjs/swagger'

export class UpdateLayoutDto {
	@ApiProperty()
	alias?: string

	@ApiProperty()
	name?: string

	@ApiProperty()
	primaryBackgroundColor?: string

	@ApiProperty()
	primaryColor?: string

	@ApiProperty()
	primaryLightColor?: string

	@ApiProperty()
	secondaryBackgroundColor?: string

	@ApiProperty()
	secondaryColor?: string

	@ApiProperty()
	secondaryLightColor?: string

	@ApiProperty()
	isDefault?: boolean
}
