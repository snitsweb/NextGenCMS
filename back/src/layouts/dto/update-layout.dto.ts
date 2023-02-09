import { ApiProperty, PartialType } from '@nestjs/swagger'
import { CreateLayoutDto } from './create-layout.dto'

export class UpdateLayoutDto extends PartialType(CreateLayoutDto) {
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
