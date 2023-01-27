import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SettingsModule } from './settings/settings.module';
import { PhotosModule } from './photos/photos.module';
import { PagesModule } from './pages/pages.module';
import { OverviewModule } from './overview/overview.module';

@Module({
  imports: [OverviewModule, PagesModule, PhotosModule, SettingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
