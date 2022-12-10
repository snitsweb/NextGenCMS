import BaseContainer from '../../components/atoms/BaseContainer/BaseContainer'
import s from './GallerySection.module.scss'
import GalleryItem from './components/GalleryItem/GalleryItem'

const GallerySection = ({value}) => {
	return (
		<section className={s.section}>
			<BaseContainer>
				<div className={s.section__inner}>
					<div className={s.gallery}>
						{
							value.images.length ?
								value.images.map(image => (
									<GalleryItem
										image={image.image}
										alt={image.alt}
										title={image.title}
										key={image.image}
									/>
								))
								:
								''
						}
					</div>
				</div>
			</BaseContainer>
		</section>
	)
}

export default GallerySection
