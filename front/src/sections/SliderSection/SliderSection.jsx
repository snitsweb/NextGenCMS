import BaseContainer from '../../components/atoms/BaseContainer/BaseContainer'
import s from './SliderSection.module.scss'
import '@splidejs/react-splide/css/core'
import '@splidejs/react-splide/css'
import Slide from './components/Slide/Slide'
import {Splide} from '@splidejs/react-splide'
const slides = [
	{
		image: 'https://i.ibb.co/R3JhM0J/Group-1-min.jpg',
		alt: 'Alternative text',
		title: 'Title of image'
	},
	{
		image: 'https://i.ibb.co/VDnKX0R/Group-3-min.jpg',
		alt: 'Alternative text',
		title: 'Title of image'
	},
	{
		image: 'https://i.ibb.co/zrQR45k/Group-8-min.jpg',
		alt: 'Alternative text',
		title: 'Title of image'
	},
	{
		image: 'https://i.ibb.co/9vqcJK3/Group-4-min.jpg',
		alt: 'Alternative text',
		title: 'Title of image'
	},
	{
		image: 'https://i.ibb.co/c6Kpn9Z/Group-5-min.jpg',
		alt: 'Alternative text',
		title: 'Title of image'
	},
	{
		image: 'https://i.ibb.co/vJzpDGF/Group-6-min.jpg',
		alt: 'Alternative text',
		title: 'Title of image'
	},
	{
		image: 'https://i.ibb.co/KL295kL/Group-7-min.jpg',
		alt: 'Alternative text',
		title: 'Title of image'
	}
]

const SliderSection = () => {

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
						slides ?
							slides.map(slide => {
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
