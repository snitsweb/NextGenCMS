import { Module } from '@nestjs/common'
import { SettingsService } from './settings.service'
import { SettingsController } from './settings.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Social } from './features/socials/models/social.model'
import { Settings } from './models/settings.model'
import { Photo } from '../photos/models/photo.model'
import { Layout } from './features/layouts/models/layout.model'
import { LayoutsModule } from './features/layouts/layouts.module'
import { SocialsModule } from './features/socials/socials.module'

@Module({
	imports: [
		SequelizeModule.forFeature([Layout, Social, Settings, Photo]),
		LayoutsModule,
		SocialsModule,
	],
	controllers: [SettingsController],
	providers: [SettingsService],
})
export class SettingsModule {}
