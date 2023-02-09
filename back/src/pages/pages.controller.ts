import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common'
import { PagesService } from './pages.service'
import { CreatePageDto } from './dto/create-page.dto'
import { UpdatePageDto } from './dto/update-page.dto'

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

	@Get(':alias')
	findOne(@Param('alias') alias: string) {
		return this.pagesService.findOne(alias)
	}

	@Patch(':alias')
	update(@Param('alias') alias: string, @Body() updatePageDto: UpdatePageDto) {
		return this.pagesService.update(alias, updatePageDto)
	}

	@Delete(':alias')
	remove(@Param('alias') alias: string) {
		return this.pagesService.remove(alias)
	}
}
