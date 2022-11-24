import React from 'react'
import {IApp} from 'IApp'

export const App: React.FC<IApp> = ({children}) => {
	return (
		<>
			{children}
		</>
	)
}
