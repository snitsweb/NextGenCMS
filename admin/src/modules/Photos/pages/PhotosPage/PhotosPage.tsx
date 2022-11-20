import React from 'react'
import {BaseFont} from 'common/components/BaseFont/BaseFont'
import {BaseButton} from 'common/components/BaseButton/BaseButton'
import {BaseContainer} from 'common/components/BaseContainer/BaseContainer'
import {LoadedPhotos} from 'modules/Photos/pages/PhotosPage/components/LoadedPhotos/LoadedPhotos'
import s from './PhotosPage.module.scss'

export const PhotosPage: React.FC = () => {
	return (
		<div className={s.photos_page}>
			<BaseContainer>
				<div className={s.photos_page_inner}>
					<BaseFont tag={'h1'}>Photos</BaseFont>
					<LoadedPhotos />
					<div className={s.photos_page_buttons_wrapper}>
						<BaseButton>Add photo</BaseButton>
					</div>
				</div>
			</BaseContainer>
		</div>

	)
}