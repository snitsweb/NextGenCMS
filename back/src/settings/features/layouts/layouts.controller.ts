import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { CreateLayoutDto } from './dto/create-layout.dto'
import { LayoutsService } from './layouts.service'

@Controller('layouts')
export class LayoutsController {
	constructor(private readonly layoutsService: LayoutsService) {}

	@Post()
	create(@Body() createLayoutDto: CreateLayoutDto) {
		return this.layoutsService.create(createLayoutDto)
	}

	@Get()
	findAll() {
		return this.layoutsService.findAll()
	}

	@Get(':id')
	find(@Param('id') id: string) {
		return this.layoutsService.findOne(id)
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.layoutsService.remove(id)
	}
}
