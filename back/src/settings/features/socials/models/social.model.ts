import {
	BelongsTo,
	Column,
	ForeignKey,
	HasOne,
	Model,
	Table,
} from 'sequelize-typescript'
import { DataTypes } from 'sequelize'
import { Settings } from '../../../models/settings.model'
import { Photo } from '../../../../photos/models/photo.model'

@Table
export class Social extends Model {
	@Column({
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	})
	id: string

	@Column(DataTypes.STRING)
	name: string

	@Column(DataTypes.STRING)
	href: string

	@ForeignKey(() => Settings)
	@Column(DataTypes.UUID)
	settings_id: string

	@BelongsTo(() => Settings)
	settings: Settings

	@HasOne(() => Photo)
	image: Photo
}
