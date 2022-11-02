import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import MultiSection from '../MultiSection/MultiSection'
import ExampleSection from '../../../sections/ExampleSection/ExampleSection'


const Page = ({sections}) => {
	let location = useLocation()

	useEffect(() => {
		window.app.setMeta()
	}, [location])

	return (
		<>
			<ExampleSection />
			{sections && <MultiSection sections={sections} />}
		</>
	)
}

export default Page
