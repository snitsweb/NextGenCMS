import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { SocialsService } from './socials.service'
import { CreateSocialDto } from './dto/create-social.dto'

@Controller('socials')
export class SocialsController {
	constructor(private readonly socialService: SocialsService) {}

	@Post()
	async create(@Body() createSocialDto: CreateSocialDto) {
		return await this.socialService.create(createSocialDto)
	}

	@Get()
	findAll() {
		return this.socialService.findAll()
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.socialService.findOne(id)
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.socialService.remove(id)
	}
}
