import s from './BaseButton.module.scss'
import {BaseFont} from 'common/components/BaseFont/BaseFont'
import React from 'react'

export interface IBaseButton {
	children: string
	onClick?: () => void
	className?: string
	type?: 'primary' | 'bordered' | 'danger'
	icon?: any
	iconFill?: 'primary' | 'white' | 'dark'
}

export const BaseButton: React.FC<IBaseButton> = (
	{children,className, type= 'primary', icon: Icon, iconFill= 'primary', onClick}
) => {
	const extendedClassname = `${s.button} ${s[type]} ${className ? className : ''}`
	return (
		<div className={extendedClassname} onClick={onClick && onClick}>
			{Icon ? <Icon className={s[`svg_${iconFill}`] + ' '+ s.svg} /> : ''}
			<BaseFont className={s.text} tag={'span'} color={'white'}>{children}</BaseFont>
		</div>
	)
}