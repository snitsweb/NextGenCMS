import React, { useEffect } from 'react'

import {ReactNode} from 'react'
import { useNavigate } from 'react-router-dom'

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
