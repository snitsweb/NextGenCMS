import s from 'common/components/BaseContainer/BaseContainer.module.scss'
import React from 'react'
import {IBaseContainer} from 'common/components/BaseContainer/IBaseContainer'

export const BaseContainer: React.FC<IBaseContainer> = ({children}) => {
	return (
		<div className={s.container}>
			{children}
		</div>
	)
}