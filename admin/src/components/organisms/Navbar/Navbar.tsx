import {INavbar} from './INavbar'
import React from 'react'
import s from './Navbar.module.scss'
import {MenuItem} from '../../molecules/MenuItem/MenuItem'
import {ReactComponent as PhotosLogo} from 'assets/svg/photo.svg'
import {ReactComponent as PagesLogo} from 'assets/svg/page.svg'
import {ReactComponent as SectionsLogo} from 'assets/svg/sections.svg'
import {ReactComponent as AppearanceLogo} from 'assets/svg/appearance.svg'
import {ReactComponent as SettingsLogo} from 'assets/svg/settings.svg'
import {GetMenuRoutes} from 'hooks/GetMenuRoutes'

export const Navbar: React.FC<INavbar> = ({className}) => {

	const extendedClassname = `${className} ${s.navbar}`

	const menuItems = GetMenuRoutes()

	// const menuItems = [
	// 	{
	// 		icon: OverviewLogo,
	// 		name: 'Overview'
	// 	},
	// 	{
	// 		icon: PhotosLogo,
	// 		name: 'Photos'
	// 	},
	// 	{
	// 		icon: PagesLogo,
	// 		name: 'Pages'
	// 	},
	// 	{
	// 		icon: SectionsLogo,
	// 		name: 'Sections'
	// 	},
	// 	{
	// 		icon: AppearanceLogo,
	// 		name: 'Appearance'
	// 	},
	// 	{
	// 		icon: SettingsLogo,
	// 		name: 'Settings'
	// 	}
	// ]

	return (
		<menu className={extendedClassname}>
			{
				menuItems ? menuItems.map(item => <MenuItem
					name={item.name}
					icon={item.icon}
					path={item.path}
					key={item.name}
				/>) : ''
			}
		</menu>
	)
}