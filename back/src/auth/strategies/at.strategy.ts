import { Strategy, ExtractJwt } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import config from '../../config'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AtStrategy extends PassportStrategy(Strategy, 'jwt-access') {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: config.jwt.secretAccess,
		})
	}

	validate(payload: any) {
		return payload
	}
}
