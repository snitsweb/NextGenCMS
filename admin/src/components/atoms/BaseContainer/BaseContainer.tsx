import s from './BaseContainer.module.scss'
import React from 'react'
import {IBaseContainer} from 'components/atoms/BaseContainer/IBaseContainer'

export const BaseContainer: React.FC<IBaseContainer> = ({children}) => {
	return (
		<div className={s.container}>
			{children}
		</div>
	)
}