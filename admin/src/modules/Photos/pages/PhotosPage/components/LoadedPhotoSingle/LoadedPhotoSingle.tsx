import {useDispatch} from 'react-redux'
import s from './LoadedPhotoSingle.module.scss'
import {BaseButton} from 'common/components/BaseButton/BaseButton'
import React, {useState} from 'react'
import {BaseFont} from 'common/components/BaseFont/BaseFont'
import {ReactComponent as DeleteIcon} from '@assets/svg/delete.svg'
import {deletePhoto} from '@modules/Photos/core/reducer'

export interface ILoadedPhotoSingle {
	id: number
	imageUri: string
	name: string
}

export const LoadedPhotoSingle: React.FC<ILoadedPhotoSingle> = ({imageUri, name, id}) => {
	const [isPopupActive, setIsPopupActive] = useState(false)
	const dispatch = useDispatch()

	const handleClickDeleteButton = () => {
		setIsPopupActive(true)
	}

	const handleDeleteClick = () => {
		window.app.nc.http.delete(`/image/${id}`)
			.catch(e => console.error(e))
			.then(response => {
				if(!response) {
					alert('Something went wrong. Check console for more details')
				} else {
					dispatch(deletePhoto(id))
					alert('Deleted!')
				}
			})
			.finally(() => setIsPopupActive(false))
	}

	const handleCancelClick = () => {
		setIsPopupActive(false)
	}

	return (
		<div className={s.loaded_photo}>
			<div className={s.loaded_photo_image_wrapper}>
				<img src={imageUri} alt="Loaded photo"/>
				<div className={s.loaded_photo_overlay}>
					<BaseButton
						type={'danger'}
						icon={DeleteIcon}
						iconFill={'white'}
						onClick={handleClickDeleteButton}
					>
						Delete photo
					</BaseButton>
				</div>
			</div>
			<BaseFont tag={'span'}>{name}</BaseFont>
			<div className={`${s.popup} ${isPopupActive ? s.popup_active : ''}`}>
				<div className={s.popup__inner}>
					<BaseFont tag={'h2'}>Are you sure?</BaseFont>
					<div className={s.popup__buttons}>
						<BaseButton type={'danger'} onClick={handleDeleteClick}>Delete</BaseButton>
						<BaseButton type={'bordered'} onClick={handleCancelClick}>Cancel</BaseButton>
					</div>
				</div>
			</div>
		</div>
	)
}