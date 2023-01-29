import { Column, Model, Table } from 'sequelize-typescript'
import { DataTypes } from 'sequelize'

@Table
export class Page extends Model {
	@Column({
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
	})
	id: string

	@Column(DataTypes.STRING)
	alias: string

	@Column(DataTypes.STRING)
	path: string

	@Column(
		DataTypes.ENUM({
			values: ['active', 'inactive'],
		}),
	)
	status: 'active' | 'inactive'

	@Column(DataTypes.STRING)
	name: string

	@Column(DataTypes.STRING)
	title: string

	@Column(DataTypes.STRING)
	description: string

	@Column(DataTypes.JSON)
	value: string
}
