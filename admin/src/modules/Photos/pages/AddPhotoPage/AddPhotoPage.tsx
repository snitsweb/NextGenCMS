import React from 'react'
import s from './AddPhotoPage.module.scss'
import {BaseContainer} from 'common/components/BaseContainer/BaseContainer'
import {BaseFont} from 'common/components/BaseFont/BaseFont'
import {BaseButton} from 'common/components/BaseButton/BaseButton'
import {NavLink} from 'react-router-dom'

export const AddPhotoPage: React.FC = () => {
	return (
		<>
			<div className={s.add_photo_page}>
				<BaseContainer>
					<div className={s.add_photo_page_inner}>
						<BaseFont tag={'h1'}>Add Photo</BaseFont>
						<NavLink to='/photos'>
							<BaseButton>Back to photos</BaseButton>
						</NavLink>
					</div>
				</BaseContainer>
			</div>
		</>
	)
}