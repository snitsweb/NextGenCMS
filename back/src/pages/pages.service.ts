import { Injectable } from '@nestjs/common'
import { CreatePageDto } from './dto/create-page.dto'
import { UpdatePageDto } from './dto/update-page.dto'
import { Page } from './models/page.model'
import { InjectModel } from '@nestjs/sequelize'

@Injectable()
export class PagesService {
	constructor(
		@InjectModel(Page)
		private pageModel: typeof Page,
	) {}

	create(createPageDto: CreatePageDto) {
		return this.pageModel.create<Page>({
			name: createPageDto.name,
			path: createPageDto.path,
			status: createPageDto.status,
		})
	}

	async findAll(): Promise<Page[]> {
		return this.pageModel.findAll<Page>()
	}

	async findOne(id: number): Promise<Page> {
		return this.pageModel.findOne<Page>({
			where: {
				id: id,
			},
		})
	}

	async update(id: number, updatePageDto: UpdatePageDto) {
		const page = await this.pageModel.findOne<Page>({
			where: {
				id: id,
			},
		})
		page.set({
			...page,
			...updatePageDto,
		})
		await page.save()
	}

	async remove(id: number) {
		const page = await this.pageModel.findOne<Page>({
			where: {
				id: id,
			},
		})
		await page.destroy()
		return id
	}
}
