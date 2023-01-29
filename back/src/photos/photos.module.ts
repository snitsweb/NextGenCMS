import { Module } from '@nestjs/common'
import { PhotosService } from './photos.service'
import { PhotosController } from './photos.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Page } from '../pages/models/page.model'
import { Social } from '../settings/models/social.model'

@Module({
	imports: [SequelizeModule.forFeature([Page, Social])],
	controllers: [PhotosController],
	providers: [PhotosService],
})
export class PhotosModule {}
