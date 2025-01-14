import { IsEmail, IsNotEmpty, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class AuthDto {
	@ApiProperty()
	@IsEmail()
	email: string

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	password: string
}
