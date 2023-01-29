import { Injectable } from '@nestjs/common'
import { CreatePhotoDto } from './dto/create-photo.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Photo } from './models/photo.model'

@Injectable()
export class PhotosService {
	constructor(
		@InjectModel(Photo)
		private photoModel: typeof Photo,
	) {}

	async create(createPhotoDto: CreatePhotoDto) {
		return await this.photoModel.create({ ...createPhotoDto })
	}

	async findAll() {
		return await this.photoModel.findAll()
	}

	async findOne(id: string) {
		return await this.photoModel.findOne({
			where: {
				id: id,
			},
		})
	}

	remove(id: string) {
		return this.photoModel.destroy({
			where: {
				id: id,
			},
		})
	}
}
