import {Module} from '@common/core/Module/Module'
import {ReactComponent as Icon} from '../assets/svg/pages.svg'
import React from 'react'
import PageList from '../pages/PagesList/PageList'
import PageEdit from '../pages/PageEdit/PageEdit'

export class PagesModule extends Module {
	static defaultPath = '/pages/'
	static moduleName = 'Pages'
	static icon = Icon

	registerRoutes(): void {
		this.routes.push(
			{
				path: '/pages/',
				element: <PageList/>,
				name: 'Overview Page',
				description: 'Overview page description',
				title: 'Overview'
			}
		)
		this.routes.push(
			{
				path: '/pages/edit',
				element: <PageEdit/>,
				name: 'Edit Page',
				description: 'Edit page description',
				title: 'Edit page'
			}
		)
	}
}