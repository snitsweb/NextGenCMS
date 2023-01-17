import React from 'react'
import s from './JumbotronSection.module.scss'
import BaseContainer from '../../components/atoms/BaseContainer/BaseContainer'
import BaseFont from '../../components/atoms/BaseFont/BaseFont'
import BaseButton from '../../components/molecules/BaseButton/BaseButton'
const JumbotronSection = ({value}) => {
	console.log(value)
	return (
		<section className={s.jumbotron_section}>
			<BaseContainer>
				<div className={s.jumbotron_section_inner}>
					<div className={s.content_wrapper}>
						<div className={s.content_wrapper_text_section}>
							<BaseFont tag={'h1'}>
								{value.value.header}
							</BaseFont>
							<BaseFont tag={'p'}>
								{value.value.description}
							</BaseFont>
							<BaseButton theme={'secondary'} className={s.jumbotron_section_button}
								text="Show more"
							/>
						</div>
						<img src={value.images[0].image} alt={value.images[0].alt} title={value.images[0].title} />
					</div>
				</div>
			</BaseContainer>
		</section>
	)
}

export default JumbotronSection