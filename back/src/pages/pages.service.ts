import { Inject, Injectable } from '@nestjs/common'
import { CreatePageDto } from './dto/create-page.dto'
import { UpdatePageDto } from './dto/update-page.dto'
import { Page } from './entities/page.entity'

@Injectable()
export class PagesService {
	constructor(
		@Inject('PAGES_REPOSITORY')
		private pagesRepository: typeof Page,
	) {}

	create(createPageDto: CreatePageDto) {
		return 'This action adds a new page'
	}

	async findAll(): Promise<Page[]> {
		return this.pagesRepository.findAll<Page>()
	}

	async findOne(id: number): Promise<Page> {
		return this.pagesRepository.findOne<Page>({
			where: {
				id: id,
			},
		})
	}

	update(id: number, updatePageDto: UpdatePageDto) {
		return `This action updates a #${id} page`
	}

	remove(id: number) {
		return `This action removes a #${id} page`
	}
}
