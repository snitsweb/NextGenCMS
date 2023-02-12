import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { App } from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Application } from 'core/Application'
import { Provider } from 'react-redux'
import store from 'store'
import { ThemeProvider } from '@mui/material'

const app = new Application()
window.app = app
const router = createBrowserRouter(app.reactRoutes)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
    <App>
        <Provider store={store}>
            <ThemeProvider theme={app.theme}>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </Provider>
    </App>
)
