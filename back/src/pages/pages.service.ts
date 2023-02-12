import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common'
import { CreatePageDto } from './dto/create-page.dto'
import { UpdatePageDto } from './dto/update-page.dto'
import { PrismaService } from '../prisma/prisma.service'
import { Public } from '../common/decorators'

@Injectable()
export class PagesService {
	constructor(private readonly prisma: PrismaService) {}
	async create(createPageDto: CreatePageDto) {
		return this.prisma.page.create({ data: createPageDto })
	}

	async findAll() {
		return this.prisma.page.findMany()
	}

	async findOne(alias: string) {
		const page = await this.prisma.page.findUnique({
			where: { alias: alias },
		})

		if (!page) throw new NotFoundException()

		return page
	}

	async update(alias: string, dto: UpdatePageDto) {
		const page = await this.prisma.page.findUnique({
			where: { alias: alias },
		})

		if (!page) throw new NotFoundException()

		return this.prisma.page.update({
			where: { alias: alias },
			data: {
				...page,
				...dto,
			},
		})
	}

	async remove(alias: string) {
		const page = await this.prisma.page.findUnique({
			where: { alias: alias },
		})

		if (!page) throw new NotFoundException()

		return this.prisma.page.delete({
			where: { alias: alias },
		})
	}
}
