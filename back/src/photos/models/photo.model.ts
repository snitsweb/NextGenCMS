import {
	BelongsTo,
	Column,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript'
import { DataTypes } from 'sequelize'
import { Social } from '../../settings/features/socials/models/social.model'

@Table
export class Photo extends Model {
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

	@ForeignKey(() => Social)
	@Column(DataTypes.UUID)
	social_id: string

	@BelongsTo(() => Social)
	social: Social
}
