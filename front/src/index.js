import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import App from './App'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App>
			<RouterProvider router={router} />
		</App>
	</React.StrictMode>
)
