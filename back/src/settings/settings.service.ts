import { Injectable } from '@nestjs/common';
import { CreateSettingDto } from './dto/create-setting.dto';
import { Social } from './features/socials/models/social.model';
import { InjectModel } from '@nestjs/sequelize';
import { Layout } from './features/layouts/models/layout.model';
import { Settings } from './models/settings.model';
import { UpdateSettingDto } from './dto/update-setting.dto';

@Injectable()
export class SettingsService {
	constructor(
		@InjectModel(Layout)
		private layoutModel: typeof Layout,
		@InjectModel(Social)
		private socialModel: typeof Social,
		@InjectModel(Settings)
		private settingsModel: typeof Settings,
	) {
	}

	async create(createSettingDto: CreateSettingDto) {
		const settings = await this.settingsModel.create();

		let layout = await Layout.findOne({
			where: {
				theme: createSettingDto.layout.theme,
			},
		});

		if (!layout) {
			layout = await Layout.create({
				theme: createSettingDto.layout.theme,
			});
		}

		layout.settings_id = settings.id;
		await layout.save();

		createSettingDto.socials.forEach(async (social) => {
			const createdSocial = await this.socialModel.create(social);
			createdSocial.settings_id = settings.id;
			await createdSocial.save();
		});

		return settings;
	}

	async findAll() {
		return await this.settingsModel.findAll({
			include: [Layout, Social],
		});
	}

	findOne(id: string) {
		return this.settingsModel.findOne({
			where: {
				id: id,
			},
			include: [Layout, Social],
		});
	}

	async update(id: string, updateSettingDto: UpdateSettingDto) {
		const layout = await this.layoutModel.findOne({
			where: {
				settings_id: id,
			},
		});
		layout.theme = updateSettingDto.layout.theme;
		await layout.save();

		if (updateSettingDto.socials) {
			const socials = [];
			updateSettingDto.socials.forEach(async (social) => {
				const entitySocial = await this.socialModel.findOne({
					where: {
						id: social.id,
					},
				});
				entitySocial.set({ ...social });
				await entitySocial.save();
			});
		}

		return await this.settingsModel.findOne({
			where: {
				id: id,
			},
			include: [{ all: true }],
		});
	}

	async remove(id: string) {
		return await this.settingsModel.destroy({
			where: {
				id: id,
			},
		});
	}
}
