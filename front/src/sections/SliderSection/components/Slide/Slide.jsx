import s from './Slide.module.scss'
import {SplideSlide} from '@splidejs/react-splide'

const Slide = ({slide={}}) => {
	return (
		<SplideSlide className={s.slide}>
			<img
				className={s.slide__image}
				src={slide.image}
				alt={slide.alt}
				title={slide.title}
			/>
		</SplideSlide>
	)
}

export default Slide
