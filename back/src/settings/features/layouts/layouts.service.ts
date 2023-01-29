import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Layout } from './models/layout.model'
import { CreateLayoutDto } from './dto/create-layout.dto'

@Injectable()
export class LayoutsService {
	constructor(
		@InjectModel(Layout)
		private layoutModel: typeof Layout,
	) {}

	async create(createLayoutDto: CreateLayoutDto) {
		return await this.layoutModel.create({ ...createLayoutDto })
	}

	async findAll() {
		return await this.layoutModel.findAll()
	}

	async findOne(id: string) {
		return await this.layoutModel.findOne({
			where: {
				id: id,
			},
		})
	}

	async remove(id: string) {
		return await this.layoutModel.destroy({
			where: {
				id: id,
			},
		})
	}
}
