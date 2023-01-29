import { Column, HasMany, HasOne, Model, Table } from 'sequelize-typescript'
import { DataTypes } from 'sequelize'
import { Layout } from './layout.model'
import { Social } from './social.model'

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

	@HasMany(() => Social)
	socials: Social[]
}
