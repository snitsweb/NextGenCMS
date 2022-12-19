import {INavbar} from './INavbar'
import React from 'react'
import s from './Navbar.module.scss'
import {MenuItem} from '../../molecules/MenuItem/MenuItem'
import {GetMenuRoutes} from 'hooks/GetMenuRoutes'

export const Navbar: React.FC<INavbar> = ({className}) => {

	const extendedClassname = `${className} ${s.navbar}`

	const menuItems = GetMenuRoutes()

	return (
		<menu className={extendedClassname}>
			{
				menuItems ? menuItems.map(item => <MenuItem
					name={item.name}
					icon={item.icon}
					path={item.path}
					isActive={item.isActive}
					key={item.name}
				/>) : ''
			}
		</menu>
	)
}