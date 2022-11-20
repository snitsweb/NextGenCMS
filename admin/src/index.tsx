import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {App} from './App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Application} from 'core/Application'

const app = new Application()
window.app = app
const router = createBrowserRouter(app.reactRoutes)
console.log(app.reactRoutes)


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
	<React.StrictMode>
		<App>
			<RouterProvider router={router} />
		</App>
	</React.StrictMode>
)
