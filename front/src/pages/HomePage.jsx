import MultiSection from '../components/organisms/MultiSection/MultiSection'
import ExampleSection from '../sections/ExampleSection/ExampleSection'


const HomePage = ({sections}) => {

	return (
		<div>
			<ExampleSection />
			{sections && <MultiSection sections={sections} />}
		</div>
	)
}

export default HomePage
