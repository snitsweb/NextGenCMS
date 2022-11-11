import {IBaseButton} from 'common/components/BaseButton/IBaseButton'
import s from './BaseButton.module.scss'
import {BaseFont} from 'common/components/BaseFont/BaseFont'
import React from 'react'

export const BaseButton: React.FC<IBaseButton> = ({children,className, type= 'primary', icon: Icon}) => {
	const extendedClassname = `${s.button} ${s[type]} ${className ? s[className] : ''}`
	return (
		<div className={extendedClassname}>
			{Icon ? <Icon /> : ''}
			<BaseFont tag={'span'} color={'white'}>{children}</BaseFont>
		</div>
	)
}