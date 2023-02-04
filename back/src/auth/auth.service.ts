import { ForbiddenException, Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { AuthDto } from './dto'
import * as bcrypt from 'bcrypt'
import config from '../config'
import { JwtService } from '@nestjs/jwt'
import { Tokens } from './types'

@Injectable()
export class AuthService {
	constructor(private prisma: PrismaService, private jwtService: JwtService) {}

	async localSignUp(dto: AuthDto): Promise<Tokens> {
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

	async localSignIn(dto: AuthDto): Promise<Tokens> {
		const user = await this.prisma.user.findUnique({
			where: {
				email: dto.email,
			},
		})

		if (!user)
			throw new ForbiddenException(
				`Access Denied, no user with email ${dto.email}`,
			)

		const passwordMatches = await bcrypt.compare(dto.password, user.hash)
		if (!passwordMatches)
			throw new ForbiddenException('Access Denied, incorrect password')

		const tokens = await this.getTokens(user.id, user.email)
		await this.updateRtHash(user.id, tokens.refreshToken)
		return tokens
	}

	async logout(userId: string) {
		await this.prisma.user.updateMany({
			where: {
				id: userId,
				hashedRt: {
					not: null,
				},
			},
			data: {
				hashedRt: null,
			},
		})
	}

	async refresh(userId: string, refreshToken: string) {
		const user = await this.prisma.user.findUnique({
			where: {
				id: userId,
			},
		})

		if (!user || !user.hashedRt) throw new ForbiddenException('Access denied')

		const rtMatches = await bcrypt.compare(refreshToken, user.hashedRt)
		if (!rtMatches) throw new ForbiddenException('Access denied')

		const tokens = await this.getTokens(user.id, user.email)
		await this.updateRtHash(user.id, tokens.refreshToken)
		return tokens
	}

	async hashData(data: string) {
		return bcrypt.hash(data, 10)
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
