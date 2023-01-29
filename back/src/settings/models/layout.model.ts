import {
	BelongsTo,
	Column,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { DataTypes } from 'sequelize'
import { Settings } from './settings.model'

@Table
export class Layout extends Model {
	@Column({
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	})
	id: string

	@Column(DataTypes.STRING)
	theme: string

	@ForeignKey(() => Settings)
	@Column(DataTypes.UUID)
	settings_id: string

	@BelongsTo(() => Settings)
	settings: Settings
}
