import {ILayout} from './ILayout'
import React from 'react'
import s from './Layout.module.scss'
import {Navbar} from '../Navbar/Navbar'
import {Header} from '../Header/Header'
import {BaseContainer} from 'components/atoms/BaseContainer/BaseContainer'
export const Layout: React.FC<ILayout> = ({children}) => {
	return (
		<div className={s.layout}>
			<Navbar className={s.navbar} />
			<div className={s.content}>
				<Header />
				<BaseContainer>
					<div className="content">
						{children}
					</div>
				</BaseContainer>
			</div>
		</div>
	)
}