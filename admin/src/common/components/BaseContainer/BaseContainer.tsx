import s from 'common/components/BaseContainer/BaseContainer.module.scss'
import React, { ReactNode } from 'react'

interface IBaseContainer {
	children: ReactNode
}

export const BaseContainer: React.FC<IBaseContainer> = ({children}) => {
    return (
        <div className={s.container}>
            {children}
        </div>
    )
}