import axios from 'axios'

export class NetworkController {
	constructor() {
		this.axios = axios.create({
			baseURL: 'http://192.168.1.190:8080/'
		})
	}

	async getDatabase () {
		return await this.axios.get('/page/1')
			.then((res) => res)
			.catch((err) => err)
	}
}