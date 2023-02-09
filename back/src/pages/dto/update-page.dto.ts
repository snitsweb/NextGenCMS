import { PartialType } from '@nestjs/swagger'
import { CreatePageDto } from './create-page.dto'

export class UpdatePageDto extends PartialType(CreatePageDto) {
	path?: string
	alias?: string
	name?: string
	status?: 'PUBLISHED' | 'DRAFT'
}
