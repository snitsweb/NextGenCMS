import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthDto } from './dto'
import { Tokens } from './types'

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('/local/signUp')
	localSignUp(@Body() dto: AuthDto): Promise<Tokens> {
		return this.authService.localSignUp(dto)
	}

	@Post('/local/signIn')
	localSignIn(@Body() dto: AuthDto): Promise<Tokens> {
		return this.authService.localSignIn(dto)
	}

	@Post('/logout')
	async logout() {
		this.authService.logout()
	}

	@Post('/refresh')
	async refresh() {
		this.authService.refresh()
	}
}
