import {RouteObject} from 'react-router-dom'
import {Module} from 'common/core/Module/Module'
import {OverviewModule} from 'modules/Overview/core/OverviewModule'
import {IReactRoute} from 'core/IReactRoute'

export class Application {
	private modules: Module[] = []
	private routes: IReactRoute[] = []

	constructor() {
		this.init()
	}

	init (): void {
		this.registerModules()
		this.createRoutes()
		console.log(this)
	}

	registerModules (): void {
		this.modules.push(new OverviewModule())
	}

	createRoutes() {
		this.modules.map(module => {
			module.routes.map(moduleRoute => {
				this.routes.push({
					path: moduleRoute.path,
					element: moduleRoute.element
				})
			})
		})
	}

	getRoutes (): RouteObject[] {
		return this.routes
	}
}