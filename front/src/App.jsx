import Header from './components/organisms/Header/Header'
import Footer from './components/organisms/Footer/Footer'

function App({children}) {
	return (
		<div className="App">
			<Header />
			{children}
			<Footer/>
		</div>
	)
}

export default App
