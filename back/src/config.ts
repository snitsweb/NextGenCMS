import * as dotenv from 'dotenv'

dotenv.config()

export default {
	db: {
		user: process.env.DB_USER || 'root',
		host: process.env.DB_HOST || 'localhost',
		port: parseInt(process.env.DB_PORT) || 3306,
		pass: process.env.DB_PASS || 'qwerty',
		name: process.env.DB_NAME || 'backend_snitsweb',
	},
}
