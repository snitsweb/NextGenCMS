import { ApiProperty } from '@nestjs/swagger'

export class CreatePageDto {
	@ApiProperty()
	path: string

	@ApiProperty()
	alias: string

	@ApiProperty()
	name: string

	@ApiProperty()
	status: 'PUBLISHED' | 'DRAFT'

	@ApiProperty()
	title?: string

	@ApiProperty()
	description?: string

	@ApiProperty()
	schema?: object

	@ApiProperty()
	value?: object

	@ApiProperty()
	config?: object
}
