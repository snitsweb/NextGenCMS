import { NestFactory, Reflector } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import configuration from './config'
import { ValidationPipe } from '@nestjs/common'
import { AtGuard } from './common/guards'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.enableCors({
		origin: '*',
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		preflightContinue: false,
		optionsSuccessStatus: 204,
	})

	app.useGlobalPipes(new ValidationPipe())

	const config = new DocumentBuilder()
		.setTitle('Snitsweb API')
		.setDescription('Snitsweb API description')
		.setVersion('1.0')
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api', app, document)

	await app.listen(configuration.app.port)

	console.info(`App started on port ${configuration.app.port}`)
}

bootstrap()
