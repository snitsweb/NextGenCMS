import React from 'react'
import {Layout} from './components/organisms/Layout/Layout'
import {IApp} from 'IApp'

export const App: React.FC<IApp> = ({children}) => {
	return (
		<Layout>
			{children}
		</Layout>
	)
}
