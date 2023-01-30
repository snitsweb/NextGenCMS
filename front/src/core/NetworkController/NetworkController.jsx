import axios from 'axios'

export class NetworkController {
	constructor() {
		this.axios = axios.create({
			baseURL: 'http://localhost:5000/'
		})
	}

	async getPages() {
		return await this.axios.get('/pages')
	}

	async getSettings() {
		return await this.axios.get('/settings')
	}
}