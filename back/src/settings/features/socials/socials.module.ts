import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { Photo } from '../../../photos/models/photo.model'
import { Settings } from '../../models/settings.model'
import { SocialsController } from './socials.controller'
import { SocialsService } from './socials.service'
import { Social } from './models/social.model'

@Module({
	imports: [SequelizeModule.forFeature([Photo, Settings, Social])],
	controllers: [SocialsController],
	providers: [SocialsService],
})
export class SocialsModule {}
