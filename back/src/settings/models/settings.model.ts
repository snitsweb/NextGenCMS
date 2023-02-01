import { Column, HasOne, Model, Table } from 'sequelize-typescript'
import { DataTypes } from 'sequelize'
import { Layout } from '../features/layouts/models/layout.model'

@Table
export class Settings extends Model {
	@Column({
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	})
	id: string

	@HasOne(() => Layout)
	layout: Layout
}
