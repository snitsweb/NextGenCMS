import * as dotenv from 'dotenv'
import * as process from 'process'

dotenv.config()

export default {
	db: {
		user: process.env.DB_USER || 'root',
		host: process.env.DB_HOST || 'localhost',
		port: parseInt(process.env.DB_PORT) || 3306,
		pass: process.env.DB_PASS || 'qwerty',
		name: process.env.DB_NAME || 'backend_snitsweb',
	},
	app: {
		port: process.env.APP_PORT || 3000,
	},
}
