import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Social } from './models/social.model'
import { CreateSocialDto } from './dto/create-social.dto'

@Injectable()
export class SocialsService {
	constructor(
		@InjectModel(Social)
		private socialModel: typeof Social,
	) {}

	async create(createSocialDto: CreateSocialDto) {
		return await this.socialModel.create({ ...createSocialDto })
	}

	async findOne(id: string) {
		return await this.socialModel.findOne({
			where: {
				id: id,
			},
		})
	}

	async findAll() {
		return await this.socialModel.findAll()
	}

	async remove(id: string) {
		return await this.socialModel.destroy({
			where: {
				id: id,
			},
		})
	}
}
