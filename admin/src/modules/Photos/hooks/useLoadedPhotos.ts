import {useEffect, useState} from 'react'
import {IControllerLoadedPhoto} from 'modules/Photos/core/PhotosController'

interface IUseLoadedPhotos {
	error: boolean,
	isLoading: boolean,
	loadedPhotos: IControllerLoadedPhoto[]
}

export const useLoadedPhotos = (): IUseLoadedPhotos => {
	const [error, setError] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [loadedPhotos, setLoadedPhotos] = useState<IControllerLoadedPhoto[]>([])

	useEffect(() => {
		try {
			setLoadedPhotos(window.photosController.getLoadedPhotos())
			setIsLoading(false)
		} catch (e) {
			setError(true)
			setIsLoading(false)
		}
	}, [])


	return {
		error,
		isLoading,
		loadedPhotos
	}
}