import {IModuleRoute} from 'common/core/Module/IModuleRoute'
import {FunctionComponent} from 'react'

export abstract class Module {
	static defaultPath = '/'
	static moduleName: string
	static icon: FunctionComponent
	routes: IModuleRoute[] = []

	constructor() {
		this.init()
	}

	init(): void {
		this.registerRoutes()
	}

	registerRoutes(): void {
	}
}