import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { AuthDto } from './dto'
import * as bcrypt from 'bcrypt'
import config from '../config'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
	constructor(private prisma: PrismaService, private jwtService: JwtService) {}

	async localSignUp(dto: AuthDto) {
		const newUser = await this.prisma.user.create({
			data: {
				email: dto.email,
				hash: await this.hashData(dto.password),
			},
		})

		const tokens = await this.getTokens(newUser.id, newUser.email)
		await this.updateRtHash(newUser.id, tokens.refreshToken)
		return tokens
	}

	localSignIn() {}

	logout() {}

	refresh() {}

	async hashData(data: string) {
		return bcrypt.hash(data, config.app.bcrypt_salt)
	}

	async getTokens(userId: string, email: string) {
		const [at, rt] = await Promise.all([
			this.jwtService.signAsync(
				{
					id: userId,
					email: email,
				},
				{
					expiresIn: 60 * 15,
					secret: config.jwt.secretAccess,
				},
			),
			this.jwtService.signAsync(
				{
					id: userId,
					email: email,
				},
				{
					expiresIn: 60 * 60 * 24 * 7,
					secret: config.jwt.secretRefresh,
				},
			),
		])

		return {
			accessToken: at,
			refreshToken: rt,
		}
	}

	async updateRtHash(userId: string, refreshToken: string) {
		const hash = await this.hashData(refreshToken)
		await this.prisma.user.update({
			where: {
				id: userId,
			},
			data: {
				hashedRt: hash,
			},
		})
	}
}
