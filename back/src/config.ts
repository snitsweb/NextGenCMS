import * as dotenv from 'dotenv'
import * as process from 'process'

dotenv.config()

export default {
	app: {
		port: process.env.APP_PORT || 3000,
		bcrypt_salt: process.env.BCRYPT_SALT || 'test',
	},
	jwt: {
		secretAccess: process.env.SECRET_JWT_ACCESS || 'qwerty',
		secretRefresh: process.env.SECRET_JWT_ACCESS || 'asdfgh',
	},
}
