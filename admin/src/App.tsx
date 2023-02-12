import React from 'react'

import {ReactNode} from 'react'

export interface IApp {
	children?: ReactNode
	type?: string,
	key?: string
}

export const App: React.FC<IApp> = ({children}) => {
    return (
        <>
            {children}
        </>
    )
}
