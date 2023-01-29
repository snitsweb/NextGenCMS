import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { Layout } from './models/layout.model'
import { LayoutsController } from './layouts.controller'
import { LayoutsService } from './layouts.service'

@Module({
	imports: [SequelizeModule.forFeature([Layout])],
	controllers: [LayoutsController],
	providers: [LayoutsService],
})
export class LayoutsModule {}
