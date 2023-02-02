import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthDto } from './dto'
import { Tokens } from './types'

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('/local/signUp')
	async localSignUp(@Body() dto: AuthDto): Promise<Tokens> {
		return await this.authService.localSignUp(dto)
	}

	@Post('/local/signIn')
	localSignIn() {
		this.authService.localSignIn()
	}

	@Post('/logout')
	logout() {
		this.authService.logout()
	}

	@Post('/refresh')
	refresh() {
		this.authService.refresh()
	}
}
