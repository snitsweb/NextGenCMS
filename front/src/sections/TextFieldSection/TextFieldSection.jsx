import React from 'react'
import s from './TextFieldSection.module.scss'
import BaseContainer from '../../components/atoms/BaseContainer/BaseContainer'
import BaseFont from '../../components/atoms/BaseFont/BaseFont'

const TextFieldSection = ({value}) => {
	return (
		<section className={s.textfield_section}>
			<BaseContainer>
				<div className={s.textfield_section_inner}>
					<BaseFont tag={'h1'}>
						{value.header}
					</BaseFont>
					<BaseFont tag={'p'}>
						{value.description}
					</BaseFont>
				</div>
			</BaseContainer>
		</section>
	)
}

export default TextFieldSection