import MultiSection from '../components/organisms/MultiSection/MultiSection'
import ExampleSection from '../sections/ExampleSection/ExampleSection'


const HomePage = () => {

	const sections = window.app.getSections()

	return (
		<div>
			<ExampleSection />
			<MultiSection sections={sections} />
		</div>
	)
}

export default HomePage
