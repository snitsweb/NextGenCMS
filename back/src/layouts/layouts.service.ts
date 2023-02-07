import {
	ForbiddenException,
	HttpStatus,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateLayoutDto, UpdateLayoutDto } from './dto'

@Injectable()
export class LayoutsService {
	constructor(private readonly prisma: PrismaService) {}
	async create(dto: CreateLayoutDto) {
		const newLayout = await this.prisma.layout.create({
			data: dto,
		})
		return newLayout
	}

	async findAll() {
		return this.prisma.layout.findMany()
	}

	async findOne(alias: string) {
		return this.prisma.layout.findUnique({
			where: {
				alias: alias,
			},
		})
	}

	async update(alias: string, dto: UpdateLayoutDto) {
		const layout = await this.prisma.layout.findUnique({
			where: {
				alias: alias,
			},
		})

		if (!layout) throw new NotFoundException()

		return this.prisma.layout.update({
			where: {
				alias: alias,
			},
			data: { ...dto },
		})
	}

	async remove(alias: string) {
		const layout = await this.prisma.layout.findUnique({
			where: {
				alias: alias,
			},
		})

		if (!layout) throw new NotFoundException()

		if (layout.isDefault)
			throw new ForbiddenException('Layout is default and can not be removed')

		await this.prisma.layout.delete({
			where: {
				alias: alias,
			},
		})

		return HttpStatus.OK
	}
}
