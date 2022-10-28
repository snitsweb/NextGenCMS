import BaseContainer from '../components/atoms/BaseContainer/BaseContainer'
import MultiSection from '../components/organisms/MultiSection/MultiSection'


const HomePage = () => {

	const sections = ['example_section']
	console.log(sections)

	return (
		<div>
			<BaseContainer>
				Homepage
			</BaseContainer>
			<MultiSection sectionsAliases={sections} />

		</div>
	)
}

export default HomePage
