import ReactDOM from 'react-dom/client'
import './index.scss'
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import App from './App'
import Application from './core/Application'


const app = new Application()

window.app = app

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<App>
		<RouterProvider router={router} />
	</App>
)

