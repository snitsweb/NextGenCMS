import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Application from './core/Application'


const app = new Application()
window.app = app

app.getData().then(() => {
	app.init()

	const router = createBrowserRouter(app.reactRouterRoutes)
	app.setRouter(router)

	const root = ReactDOM.createRoot(document.getElementById('root'))
	root.render(
		<App>
			<RouterProvider router={router} />
		</App>,
	)
})




