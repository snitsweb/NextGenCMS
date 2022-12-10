import BaseContainer from '../../atoms/BaseContainer/BaseContainer'
import BaseFont from '../../atoms/BaseFont/BaseFont'
import s from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={`${s.footer} ${s[window.app.layout.alias]}`}>
			<BaseContainer>
				<BaseFont tag='span'>Footer</BaseFont>
			</BaseContainer>
		</footer>
	)
}

export default Footer
