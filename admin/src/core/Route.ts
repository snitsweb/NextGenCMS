import {Module} from '@common/core/Module/Module'

interface IRoute {
	path: string
	icon: any
	name: string
	module: Module
}

export class Route {
	module: Module
	path: string
	icon: any
	name: string

	constructor({path, icon, name, module}: IRoute) {
		this.path = path
		this.icon = icon
		this.name = name
		this.module = module
	}

	get isActive () {
		return Object.getPrototypeOf(this.module).constructor.defaultPath.includes(window.location.pathname)
	}
}