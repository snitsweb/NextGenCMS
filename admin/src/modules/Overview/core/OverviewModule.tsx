import React from 'react'
import {Module} from 'common/core/Module/Module'
import {ReactComponent as Icon} from 'assets/svg/overview.svg'
import {OverviewPage} from 'modules/Overview/pages/OverviewPage/OverviewPage'
import {IModuleRoute} from 'common/core/Module/IModuleRoute'

export class OverviewModule extends Module {
	static moduleName = 'Overview'
	static icon = Icon
	routes: IModuleRoute[] = []

	constructor() {
		super()
		this.init()
	}

	init(): void {
		this.registerRoutes()
	}

	registerRoutes(): void {
		this.routes.push(
			{
				path: '/',
				element: <OverviewPage />,
				name: 'Overview Page',
				description: 'Overview page description',
				title: 'Overview'
			}
		)
	}
}