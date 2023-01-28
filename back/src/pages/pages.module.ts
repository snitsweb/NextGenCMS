import { Module } from '@nestjs/common'
import { PagesService } from './pages.service'
import { PagesController } from './pages.controller'
import { DatabaseModule } from '../database/database.module'
import { pagesProviders } from './pages.provider'

@Module({
	imports: [DatabaseModule],
	controllers: [PagesController],
	providers: [PagesService, ...pagesProviders],
})
export class PagesModule {}
