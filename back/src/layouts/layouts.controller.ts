import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from '@nestjs/common'
import { CreateLayoutDto, UpdateLayoutDto } from './dto'
import { LayoutsService } from './layouts.service'
import { Public } from '../common/decorators'

@Controller('layouts')
export class LayoutsController {
	constructor(private readonly layoutsService: LayoutsService) {}

	@Post()
	create(@Body() createLayoutDto: CreateLayoutDto) {
		console.log(createLayoutDto)
		return this.layoutsService.create(createLayoutDto)
	}

	@Public()
	@Get()
	findAll() {
		return this.layoutsService.findAll()
	}

	@Public()
	@Get(':alias')
	findOne(@Param('alias') alias: string) {
		return this.layoutsService.findOne(alias)
	}

	@Patch(':alias')
	update(
		@Param('alias') alias: string,
		@Body() updateLayoutDto: UpdateLayoutDto,
	) {
		return this.layoutsService.update(alias, updateLayoutDto)
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.layoutsService.remove(id)
	}
}
