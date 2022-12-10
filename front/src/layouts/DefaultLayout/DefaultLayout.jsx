import {useEffect} from 'react'
import s from './DefaultLayout.module.scss'
import Header from '../../components/organisms/Header/Header'
import Footer from '../../components/organisms/Footer/Footer'

const DefaultLayout = ({children}) => {

	useEffect(() => {
		const root = document.querySelector(':root')
		root.style.setProperty('--theme-primary', 'rgb(255, 255, 255)')
		root.style.setProperty('--theme-secondary', 'rgb(51, 51, 51)')
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

export default DefaultLayout
