import BaseContainer from '../../components/atoms/BaseContainer/BaseContainer'
import s from './SliderSection.module.scss'
import '@splidejs/react-splide/css/core'
import '@splidejs/react-splide/css'
import Slide from './components/Slide/Slide'
import {Splide} from '@splidejs/react-splide'

const SliderSection = ({value}) => {

	// visit: https://splidejs.com/integration/react-splide/
	const sliderOptions = {
		gap: '2rem'
	}


	return (
		<section className={s.section}>
			<BaseContainer>
				<Splide
					options={sliderOptions}
					className={s.section__inner}
				>
					{
						value.slides ?
							value.slides.map(slide => {
								return <Slide slide={slide} key={slide.image} />
							})
							: ''
					}
				</Splide>
			</BaseContainer>
		</section>
	)
}

export default SliderSection
