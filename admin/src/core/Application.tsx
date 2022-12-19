import React from 'react'
import {Module} from 'common/core/Module/Module'
import {OverviewModule} from 'modules/Overview/core/OverviewModule'
import {IReactRoute} from 'core/IReactRoute'
import {PhotosModule} from 'modules/Photos/core/PhotosModule'
import {PagesModule} from '@modules/Pages/core/PagesModule'
import {Layout} from 'components/organisms/Layout/Layout'
import {Route} from 'core/Route'
import {SettingsModule} from '@modules/Settings/core/SettingsModule'

export class Application {
	private _modules: Module[] = []
	private _reactRoutes: IReactRoute[] = []
	private _routes: Route[] = []

	constructor() {
		this.init()
	}

	get modules() {
		return this._modules
	}

	get reactRoutes() {
		return this._reactRoutes
	}

	get routes() {
		return this._routes
	}

	init(): void {
		this.registerModules()
		this.createReactRoutes()
		this.createRoutes()
	}

	registerModules(): void {
		this.modules.push(new OverviewModule())
		this.modules.push(new PhotosModule())
		this.modules.push(new PagesModule())
		this.modules.push(new SettingsModule())
	}

	createReactRoutes() {
		this.modules.map(module => {
			module.routes.map(moduleRoute => {
				this._reactRoutes.push({
					path: moduleRoute.path,
					element: <Layout>{moduleRoute.element}</Layout>
				})
			})
		})
	}

	createRoutes() {
		this.modules.map(module => {
			this._routes.push(new Route({
				module: module,
				path: Object.getPrototypeOf(module).constructor.defaultPath,
				name: Object.getPrototypeOf(module).constructor.moduleName,
				icon: Object.getPrototypeOf(module).constructor.icon,
			})
			)
		})
		console.log(this._reactRoutes)
	}
}