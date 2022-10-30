import s from './DefaultLayout.module.scss'
import Header from '../../components/organisms/Header/Header'
import Footer from '../../components/organisms/Footer/Footer'

const DefaultLayout = ({children}) => {
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
