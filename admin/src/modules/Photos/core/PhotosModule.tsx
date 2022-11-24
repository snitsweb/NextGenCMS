import {Module} from 'common/core/Module/Module'
import {ReactComponent as Icon} from 'assets/svg/photo.svg'
import React from 'react'
import {PhotosPage} from 'modules/Photos/pages/PhotosPage/PhotosPage'
import {PhotosController} from 'modules/Photos/core/PhotosController'
import {AddPhotoPage} from 'modules/Photos/pages/AddPhotoPage/AddPhotoPage'

export class PhotosModule extends Module {
	static defaultPath = '/photos'
	static moduleName = 'Photos'
	static icon = Icon

	controller: PhotosController

	constructor() {
		super()
		this.controller = new PhotosController()
	}

	init() {
		super.init()
		this.initController()
	}

	registerRoutes(): void {
		this.routes.push(
			{
				path: '/photos',
				element: <PhotosPage />,
				name: 'Photos page',
				description: 'Photos page description',
				title: 'Photos'
			},
			{
				path: '/photos/add',
				element: <AddPhotoPage />,
				name: 'Add photo',
				description: 'Photos page description',
				title: 'Add photo'
			}
		)
	}

	initController () : void {
		this.controller = new PhotosController()
	}
}