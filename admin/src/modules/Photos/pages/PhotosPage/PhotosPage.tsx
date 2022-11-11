import React from 'react'
import {BaseFont} from 'common/components/BaseFont/BaseFont'
import {BaseButton} from 'common/components/BaseButton/BaseButton'
import {BaseContainer} from 'common/components/BaseContainer/BaseContainer'

export const PhotosPage: React.FC = () => {
	return (
		<BaseContainer>
			<BaseFont tag={'h1'}>Photos</BaseFont>
			<BaseButton>Add photo</BaseButton>
			<BaseButton type={'bordered'}>Add photo</BaseButton>
		</BaseContainer>
	)
}