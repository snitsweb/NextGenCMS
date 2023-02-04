import {
	Body,
	Controller,
	HttpCode,
	HttpStatus,
	Post,
	UseGuards,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthDto } from './dto'
import { Tokens } from './types'
import { RtGuard } from '../common/guards'
import { GetCurrentUser, GetCurrentUserId, Public } from '../common/decorators'

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Public()
	@Post('/local/signUp')
	@HttpCode(HttpStatus.CREATED)
	localSignUp(@Body() dto: AuthDto): Promise<Tokens> {
		return this.authService.localSignUp(dto)
	}

	@Public()
	@Post('/local/signIn')
	@HttpCode(HttpStatus.OK)
	localSignIn(@Body() dto: AuthDto): Promise<Tokens> {
		return this.authService.localSignIn(dto)
	}

	@Post('/logout')
	@HttpCode(HttpStatus.OK)
	logout(@GetCurrentUserId() userId: string) {
		return this.authService.logout(userId)
	}

	@Public()
	@UseGuards(RtGuard)
	@Post('/refresh')
	@HttpCode(HttpStatus.OK)
	refresh(
		@GetCurrentUserId() userId: string,
		@GetCurrentUser('refreshToken') rt: string,
	) {
		return this.authService.refresh(userId, rt)
	}
}
