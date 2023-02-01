import { Module } from '@nestjs/common'
import { SettingsService } from './settings.service'
import { SettingsController } from './settings.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Settings } from './models/settings.model'
import { Layout } from './features/layouts/models/layout.model'
import { LayoutsModule } from './features/layouts/layouts.module'

@Module({
	imports: [SequelizeModule.forFeature([Layout, Settings]), LayoutsModule],
	controllers: [SettingsController],
	providers: [SettingsService],
})
export class SettingsModule {}
