import { Module } from '@nestjs/common'
import { SettingsModule } from './settings/settings.module'
import { PhotosModule } from './photos/photos.module'
import { PagesModule } from './pages/pages.module'
import { OverviewModule } from './overview/overview.module'
import { SequelizeModule } from '@nestjs/sequelize'
import config from './config'
import { Page } from './pages/models/page.model'

@Module({
	imports: [
		SequelizeModule.forRoot({
			dialect: 'mysql',
			host: config.db.host,
			port: config.db.port,
			username: config.db.user,
			password: config.db.pass,
			database: config.db.name,
			models: [Page],
		}),
		OverviewModule,
		PagesModule,
		PhotosModule,
		SettingsModule,
	],
})
export class AppModule {}