import BaseFont from '../../atoms/BaseFont/BaseFont'
import s from './Header.module.scss'
import {NavLink} from 'react-router-dom'

const Header = () => {
	return (
		<header className={s.header}>
			<div className="logo">
				<BaseFont tag="span">Logo</BaseFont>
			</div>
			<div className={s.header_links}>
				{window.app.routes && window.app.routes.map(route => <NavLink
					className={s.header_link}
					to={route.path}
					key={route.path}
				>
					<BaseFont tag="h4">{route.name}</BaseFont>
				</NavLink>)}
			</div>
		</header>
	)
}

export default Header
