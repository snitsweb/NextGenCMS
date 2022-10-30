import MultiSection from '../MultiSection/MultiSection'
import ExampleSection from '../../../sections/ExampleSection/ExampleSection'


const Page = ({sections}) => {

	return (
		<>
			<ExampleSection />
			{sections && <MultiSection sections={sections} />}
		</>
	)
}

export default Page
