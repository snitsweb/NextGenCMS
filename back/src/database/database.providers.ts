import { Sequelize } from 'sequelize-typescript'
import { Page } from '../pages/entities/page.entity'
import config from '../config'

console.log(config)

export const databaseProviders = [
	{
		provide: 'SEQUELIZE',
		useFactory: async () => {
			const sequelize = new Sequelize({
				dialect: 'mysql',
				host: config.db.host,
				port: config.db.port,
				username: config.db.user,
				password: config.db.pass,
				database: config.db.name,
			})
			sequelize.addModels([Page])
			await sequelize.sync()
			return sequelize
		},
	},
]
