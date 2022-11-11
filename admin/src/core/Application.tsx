import React from 'react'
import {Module} from 'common/core/Module/Module'
import {OverviewModule} from 'modules/Overview/core/OverviewModule'
import {IReactRoute} from 'core/IReactRoute'
import {PhotosModule} from 'modules/Photos/core/PhotosModule'
import {Layout} from 'components/organisms/Layout/Layout'
import {IRoute} from 'core/IRoute'

export class Application {
	private _modules: Module[] = []
	private _reactRoutes: IReactRoute[] = []
	private _routes: IRoute[] = []

	constructor() {
		this.init()
	}

	get modules () {
		return this._modules
	}

	get reactRoutes () {
		return this._reactRoutes
	}

	get routes () {
		return this._routes
	}

	init (): void {
		this.registerModules()
		this.createReactRoutes()
		this.createRoutes()
	}

	registerModules (): void {
		this.modules.push(new OverviewModule())
		this.modules.push(new PhotosModule())
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
			this._routes.push({
				path: Object.getPrototypeOf(module).constructor.defaultPath,
				name: Object.getPrototypeOf(module).constructor.moduleName,
				icon: Object.getPrototypeOf(module).constructor.icon,
			})
		})
	}
}