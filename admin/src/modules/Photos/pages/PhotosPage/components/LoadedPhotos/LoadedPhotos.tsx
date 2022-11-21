import s from './LoadedPhotos.module.scss'
import {useLoadedPhotos} from 'modules/Photos/hooks/useLoadedPhotos'
import {LoadedPhotoSingle} from 'modules/Photos/pages/PhotosPage/components/LoadedPhotoSingle/LoadedPhotoSingle'
import React from 'react'

export const LoadedPhotos: React.FC = () => {
	const {error, isLoading, loadedPhotos} = useLoadedPhotos()

	if(error) return <p>Sorry, an error occurred</p>
	if(isLoading) return <p>Loading...</p>

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