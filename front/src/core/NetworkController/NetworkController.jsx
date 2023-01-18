import axios from 'axios'

export class NetworkController {
	constructor() {
		this.axios = axios.create({
			baseURL: 'http://localhost:8080/'
		})
	}

	async getDatabase () {
		return await this.axios.get('/page/1')
	}
}