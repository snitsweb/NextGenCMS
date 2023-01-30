import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from '@nestjs/common'
import { PagesService } from './pages.service'
import { CreatePageDto } from './dto/create-page.dto'
import { UpdatePageDto } from './dto/update-page.dto'
import { ApiResponse } from '@nestjs/swagger'
import { Page } from './models/page.model'

@Controller('pages')
export class PagesController {
	constructor(private readonly pagesService: PagesService) {}

	@Post()
	create(@Body() createPageDto: CreatePageDto) {
		return this.pagesService.create(createPageDto)
	}

	@Get()
	findAll() {
		return this.pagesService.findAll()
	}

	@Get(':id')
	@ApiResponse({
		status: 200,
		description: 'The founded page',
		type: Page,
	})
	findOne(@Param('id') id: string) {
		return this.pagesService.findOne(+id)
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updatePageDto: UpdatePageDto) {
		console.log(id)
		return this.pagesService.update(id, updatePageDto)
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.pagesService.remove(id)
	}
}
