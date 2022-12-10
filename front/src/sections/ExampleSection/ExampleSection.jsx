import BaseContainer from '../../components/atoms/BaseContainer/BaseContainer'
import s from './ExampleSection.module.scss'
import BaseFont from '../../components/atoms/BaseFont/BaseFont'

const ExampleSection = ({value}) => {
	return (
		<section className={s.section}>
			<BaseContainer>

				<div className={s.section__inner}>
					<BaseFont tag="h1">
						h1 Title
					</BaseFont>
					<BaseFont tag="h2">
						h2 Title
					</BaseFont>
					<BaseFont tag="h3">
						h3 Title
					</BaseFont>
					<BaseFont tag="h4">
						h4 Title
					</BaseFont>
					<BaseFont tag="p">
						Example paragraph Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
					</BaseFont>
				</div>
			</BaseContainer>
		</section>
	)
}

export default ExampleSection
