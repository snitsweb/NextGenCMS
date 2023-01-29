import { Column, Model, Table } from 'sequelize-typescript'

@Table
export class Page extends Model {
	@Column
	path: string

	@Column
	status: string

	@Column
	name: string
}
