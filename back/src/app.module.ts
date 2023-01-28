import { Module } from '@nestjs/common'
import { SettingsModule } from './settings/settings.module'
import { PhotosModule } from './photos/photos.module'
import { PagesModule } from './pages/pages.module'
import { OverviewModule } from './overview/overview.module'

@Module({
	imports: [OverviewModule, PagesModule, PhotosModule, SettingsModule],
})
export class AppModule {}
