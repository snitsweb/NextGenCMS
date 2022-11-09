import {IMenuItem} from './IMenuItem'
import s from './MenuItem.module.scss'
import React from 'react'
import {BaseFont} from 'common/components/BaseFont/BaseFont'

export const MenuItem: React.FC<IMenuItem> = ({icon: Icon, name}) => {
	return (
		<div className={s.menu_item}>
			<Icon className={s.menu_item_icon} />
			<BaseFont
				tag={'span'}
				color={'white'}
				className={s.menu_item_text}
			>
				{name}
			</BaseFont>
		</div>
	)
}