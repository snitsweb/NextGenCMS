import {Module} from 'common/core/Module/Module'
import {ReactComponent as Icon} from 'assets/svg/photo.svg'
import React from 'react'
import {PhotosPage} from 'modules/Photos/pages/PhotosPage/PhotosPage'

export class PhotosModule extends Module {
	static defaultPath = '/photos'
	static moduleName = 'Photos'
	static icon = Icon

	registerRoutes(): void {
		this.routes.push(
			{
				path: '/photos',
				element: <PhotosPage />,
				name: 'Photos page',
				description: 'Photos page description',
				title: 'Photos'
			}
		)
	}
}