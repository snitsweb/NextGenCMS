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
	path: string

	@Column(DataTypes.STRING)
	status: string

	@Column(DataTypes.STRING)
	name: string
}
