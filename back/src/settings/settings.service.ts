import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Public } from '../common/decorators'
import { Setting } from './types'

@Injectable()
export class SettingsService {
	constructor(private readonly prisma: PrismaService) {}
	async create(dto: Setting[]) {
		await this.prisma.setting.deleteMany()
		return Promise.all(
			dto.map(async (setting) => {
				const item = this.prisma.setting.create({
					data: {
						name: setting.name,
						value: JSON.stringify(setting.value),
					},
				})
				return item
			}),
		)
	}

	@Public()
	async findAll() {
		const settings = await this.prisma.setting.findMany()
		return Promise.all(
			settings.map(async (setting) => ({
				name: setting.name,
				value: JSON.parse(setting.value),
			})),
		)
	}
}
