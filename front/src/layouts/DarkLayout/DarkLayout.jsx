import {useEffect} from 'react'
import s from './DarkLayout.module.scss'
import Header from '../../components/organisms/Header/Header'
import Footer from '../../components/organisms/Footer/Footer'

const DarkLayout = ({children}) => {

	useEffect(() => {
		const root = document.querySelector(':root')
		root.style.setProperty('--theme-primary', 'rgb(51, 51, 51)')
		root.style.setProperty('--theme-primary-o50', 'rgba(51, 51, 51, .5)')

		root.style.setProperty('--theme-secondary', 'rgb(255, 255, 255)')
		root.style.setProperty('--theme-secondary-o50', 'rgba(255, 255, 255, .5)')
	}, [])

	return (
		<div className={s.defaultLayout}>
			<Header />
			<main className={s.main}>
				{children}
			</main>
			<Footer/>
		</div>
	)
}

export default DarkLayout
