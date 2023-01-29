import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Social } from './models/social.model'
import { CreateSocialDto } from './dto/create-social.dto'
import { Photo } from '../../../photos/models/photo.model'

@Injectable()
export class SocialsService {
	constructor(
		@InjectModel(Social)
		private socialModel: typeof Social,
		@InjectModel(Photo)
		private photoModel: typeof Photo,
	) {}

	async create(createSocialDto: CreateSocialDto) {
		const image = await this.photoModel.findOne({
			where: {
				id: createSocialDto.image,
			},
		})

		if (!image) {
			throw new HttpException(
				`Image with id: ${createSocialDto.image} not found`,
				HttpStatus.NOT_FOUND,
			)
		}

		const social = await this.socialModel.create({ ...createSocialDto })

		image.social_id = social.id
		await image.save()

		return social
	}

	async findOne(id: string) {
		return await this.socialModel.findOne({
			where: {
				id: id,
			},
			include: [Photo],
		})
	}

	async findAll() {
		return await this.socialModel.findAll({
			include: [Photo],
		})
	}

	async remove(id: string) {
		return await this.socialModel.destroy({
			where: {
				id: id,
			},
		})
	}
}
