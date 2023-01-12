import axios, {AxiosInstance} from 'axios/index'

export class NetworkController {
	private axios: AxiosInstance

	constructor() {
		this.axios = axios.create({
			baseURL: 'http://example.com'
		})
	}
}