import Header from './components/organisms/Header/Header'
import Footer from './components/organisms/Footer/Footer'
import {useEffect} from 'react'

function App({children}) {

	useEffect(() => {
		console.log(window.app)
	}, [])


	return (
		<div className="App">
			<Header />
			{children}
			<Footer/>
		</div>
	)
}

export default App
