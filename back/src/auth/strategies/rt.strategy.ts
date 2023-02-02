import { Strategy, ExtractJwt } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import config from '../../config'
import { Request } from 'express'
import { Injectable } from '@nestjs/common'

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: config.jwt.secretRefresh,
			passReqToCallback: true,
		})
	}

	validate(req: Request, payload: any) {
		const refreshToken = req.get('authorization').replace('Bearer', '').trim()
		return {
			...payload,
			refreshToken,
		}
	}
}
