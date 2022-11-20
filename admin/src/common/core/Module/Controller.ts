import axios, {Axios} from 'axios'

export abstract class Controller {
	static controllerName = 'controller'
	axios: Axios

	constructor() {
		this.axios = axios
		this.init()
	}

	init() {
		return
	}
}