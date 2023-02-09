import { Controller, Get, Post, Body } from '@nestjs/common'
import { SettingsService } from './settings.service'
import { Setting } from './types'

@Controller('settings')
export class SettingsController {
	constructor(private readonly settingsService: SettingsService) {}

	@Post()
	create(@Body() createSettingDto: Setting[]) {
		return this.settingsService.create(createSettingDto)
	}

	@Get()
	findAll() {
		return this.settingsService.findAll()
	}
}
