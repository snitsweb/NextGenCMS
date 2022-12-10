import {IMenuItem} from './IMenuItem'
import s from './MenuItem.module.scss'
import React from 'react'
import {BaseFont} from 'common/components/BaseFont/BaseFont'
import {NavLink} from 'react-router-dom'

export const MenuItem: React.FC<IMenuItem> = ({icon: Icon, name, path}) => {
	return (
		<NavLink to={path} className={s.menu_item}>
			<Icon className={s.menu_item_icon} />
			<BaseFont
				tag={'span'}
				color={'white'}
				className={s.menu_item_text}
			>
				{name}
			</BaseFont>
		</NavLink>
	)
}