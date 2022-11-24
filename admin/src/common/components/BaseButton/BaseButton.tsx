import {IBaseButton} from 'common/components/BaseButton/IBaseButton'
import s from './BaseButton.module.scss'
import {BaseFont} from 'common/components/BaseFont/BaseFont'
import React from 'react'

export const BaseButton: React.FC<IBaseButton> = ({children,className, type= 'primary', icon: Icon, iconFill= 'primary'}) => {
	const extendedClassname = `${s.button} ${s[type]} ${className ? className : ''}`
	return (
		<div className={extendedClassname}>
			{Icon ? <Icon className={s[`svg_${iconFill}`] + ' '+ s.svg} /> : ''}
			<BaseFont className={s.text} tag={'span'} color={'white'}>{children}</BaseFont>
		</div>
	)
}