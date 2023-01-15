import {Module} from 'common/core/Module/Module'
import {ReactComponent as Icon} from 'assets/svg/photo.svg'
import React from 'react'
import {PhotosPage} from 'modules/Photos/pages/PhotosPage/PhotosPage'
import {AddPhotoPage} from 'modules/Photos/pages/AddPhotoPage/AddPhotoPage'
import reducer from '@modules/Photos/core/reducer'
import {setPhotos} from '@modules/Photos/core/reducer'
import {useDispatch} from 'react-redux'

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

	setReducer() {
		this.reducer = reducer
	}
}