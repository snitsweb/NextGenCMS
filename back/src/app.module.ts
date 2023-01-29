import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { SettingsModule } from './settings/settings.module'
import { PhotosModule } from './photos/photos.module'
import { PagesModule } from './pages/pages.module'
import { OverviewModule } from './overview/overview.module'
import config from './config'
import { Page } from './pages/models/page.model'
import { Layout } from './settings/features/layouts/models/layout.model'
import { Settings } from './settings/models/settings.model'
import { Photo } from './photos/models/photo.model'
import { Social } from './settings/features/socials/models/social.model'

const models = [Page, Layout, Social, Settings, Photo]

@Module({
	imports: [
		SequelizeModule.forRoot({
			dialect: 'mysql',
			host: config.db.host,
			port: config.db.port,
			username: config.db.user,
			password: config.db.pass,
			database: config.db.name,
			models: models,
			autoLoadModels: true,
			synchronize: true,
		}),
		OverviewModule,
		PagesModule,
		PhotosModule,
		SettingsModule,
	],
})
export class AppModule {}
