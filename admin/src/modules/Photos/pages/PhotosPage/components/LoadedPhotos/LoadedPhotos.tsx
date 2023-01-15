import {useAppSelector} from 'hooks/redux/useAppSelector'
import s from './LoadedPhotos.module.scss'
import {LoadedPhotoSingle} from 'modules/Photos/pages/PhotosPage/components/LoadedPhotoSingle/LoadedPhotoSingle'
import React from 'react'

export const LoadedPhotos: React.FC = () => {

	const loadedPhotos = useAppSelector(state => state.photosModule.photos)

	return (
		<>
			<div className={s.loaded_photos}>
				{
					loadedPhotos.map(photo => {
						return <LoadedPhotoSingle
							imageUri={photo.path}
							name={photo.name}
							key={photo.path}
						/>
					})
				}
			</div>
		</>

	)
}