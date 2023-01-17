import axios, {AxiosInstance} from 'axios'

export class NetworkController {
	private readonly _http: AxiosInstance

	constructor() {
		this._http = axios.create({
			baseURL: process.env.REACT_APP_BACKED_URI
		})
	}

	get http () {
		return this._http
	}
}