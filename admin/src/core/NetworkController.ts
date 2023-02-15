import axios, { AxiosInstance } from 'axios'
import Cookies from 'js-cookie'
import { AuthData } from '@common/types'

export class NetworkController {
    private readonly _http: AxiosInstance

    constructor() {
        this._http = axios.create({
            headers: {
                Authorization: `Bearer ${Cookies.get('access-token')}`
            },
            baseURL: process.env.REACT_APP_BACKED_URI
        })
    }

    get http () {
        return this._http
    }

    authorization (data: AuthData, cb?: (data: any) => void) {
        this._http.post('/auth/local/signIn', data).then(res => {
            Cookies.set('access-token', res.data.accessToken, {
                expires: 1 / 24 / 4 //15 minutes
            })
            Cookies.set('refresh-token', res.data.refreshToken, {
                expires: 7
            })
            this._http.defaults.headers['Authorization'] = res.data.accessToken
            if(cb) cb(res.data)
        }).catch(err => {
            if(cb) cb({
                ...err,
                error: true
            })
        })
    }
}

