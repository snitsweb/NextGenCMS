import { Module } from '@nestjs/common'
import { SettingsService } from './settings.service'
import { SettingsController } from './settings.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Layout } from './models/layout.model'
import { Social } from './models/social.model'
import { Settings } from './models/settings.model'
import { Photo } from '../photos/models/photo.model'

@Module({
	imports: [SequelizeModule.forFeature([Layout, Social, Settings, Photo])],
	controllers: [SettingsController],
	providers: [SettingsService],
})
export class SettingsModule {}
