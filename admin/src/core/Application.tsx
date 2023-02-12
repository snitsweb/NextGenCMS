import { Store } from '@reduxjs/toolkit'
import { NetworkController } from 'core/NetworkController'
import React from 'react'
import Cookies from 'js-cookie'
import { Module } from 'common/core/Module/Module'
import { OverviewModule } from 'modules/Overview/core/OverviewModule'
import { IReactRoute } from 'core/IReactRoute'
import { PagesModule } from '@modules/Pages/core/PagesModule'
import { Layout } from 'components/organisms/Layout/Layout'
import { Route } from 'core/Route'
import { SettingsModule } from '@modules/Settings/core/SettingsModule'
import { createTheme, Theme } from '@mui/material'
import { blue } from '@mui/material/colors'
export class Application {
    private _modules: Module[] = []
    private _reactRoutes: IReactRoute[] = []
    private _routes: Route[] = []
    private _store: Store
    private _nc: NetworkController

    private _theme: Theme

    constructor() {
        this.init()
    }

    get modules() {
        return this._modules
    }

    get reactRoutes() {
        return this._reactRoutes
    }

    get routes() {
        return this._routes
    }

    get store() {
        return this._store
    }

    get nc() {
        return this._nc
    }

    get theme() {
        return this._theme
    }

    init(): void {
        this.registerModules()
        this.createReactRoutes()
        this.createRoutes()
        this.initNetworkController()
        this.initTheme()
        this.setCssColors()
    }
    registerModules(): void {
        this.modules.push(new OverviewModule())
        this.modules.push(new PagesModule())
        this.modules.push(new SettingsModule())
    }

    createReactRoutes() {
        this.modules.map((module) => {
            module.routes.map((moduleRoute) => {
                this._reactRoutes.push({
                    path: moduleRoute.path,
                    element: <Layout>{moduleRoute.element}</Layout>,
                })
            })
        })
    }

    createRoutes() {
        this.modules.map((module) => {
            this._routes.push(
                new Route({
                    module: module,
                    path: Object.getPrototypeOf(module).constructor.defaultPath,
                    name: Object.getPrototypeOf(module).constructor.moduleName,
                    icon: Object.getPrototypeOf(module).constructor.icon,
                })
            )
        })
    }

    initNetworkController() {
        this._nc = new NetworkController()
    }

    initTheme () {
        const themeAlias = Cookies.get('theme-alias')

        if(themeAlias === 'dark') {
            this._theme = createTheme({
                palette: {
                    mode: 'dark',
                    primary: blue,
                    background: {
                        default: '#333'
                    },
                    text: {
                        primary: '#fff',
                    }
                },
            })
            return
        }

        this._theme = createTheme({
            palette: {
                mode: 'light',
                primary: blue,
                background: {
                    default: '#fcfcfc'
                },
                text: {
                    primary: '#333',
                }
            },
        })
    }

    setCssColors () {
        const root = document.querySelector<HTMLElement>(':root')
        if(!root) return
        root.style.setProperty('--primary', this._theme.palette.primary.main)
        root.style.setProperty('--secondary', this._theme.palette.secondary.main)
        root.style.setProperty('--background', this._theme.palette.background.default)
        root.style.setProperty('--text', this._theme.palette.text.primary)
    }
}
