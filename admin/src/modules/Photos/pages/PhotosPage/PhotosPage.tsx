import React from 'react'
import {BaseFont} from 'common/components/BaseFont/BaseFont'
import {BaseButton} from 'common/components/BaseButton/BaseButton'
import {BaseContainer} from 'common/components/BaseContainer/BaseContainer'
import {LoadedPhotos} from 'modules/Photos/pages/PhotosPage/components/LoadedPhotos/LoadedPhotos'
import s from './PhotosPage.module.scss'
import {NavLink} from 'react-router-dom'
import {ReactComponent as AddIcon} from '../../../../assets/svg/add.svg'

export const PhotosPage: React.FC = () => {
	return (
		<div className={s.photos_page}>
			<BaseContainer>
				<div className={s.photos_page_inner}>
					<BaseFont tag={'h1'}>Photos</BaseFont>
					<LoadedPhotos />
					<div className="fixed-btn-wrapper">
						<NavLink to={'/photos/add'}>
							<BaseButton icon={AddIcon} iconFill={'white'}>Add photo</BaseButton>
						</NavLink>
					</div>
				</div>
			</BaseContainer>
		</div>

	)
}