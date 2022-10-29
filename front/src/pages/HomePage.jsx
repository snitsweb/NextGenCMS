import MultiSection from '../components/organisms/MultiSection/MultiSection'


const HomePage = () => {

	const sections = ['example_section', 'slider_section'] //TODO: edit with request to db

	return (
		<div>
			<MultiSection sectionsAliases={sections} />
		</div>
	)
}

export default HomePage
