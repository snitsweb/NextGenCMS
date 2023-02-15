import { Module } from '@common/core/Module/Module'
import React from 'react'
import AuthPage from '@modules/Auth/pages/AuthPage/AuthPage'

export class AuthModule extends Module {
    static shouldShowInMenu = false
    static defaultPath = '/auth'
    static moduleName = 'Auth'

    registerRoutes(): void {
        this.routes.push(
            {
                path: '/auth',
                element: <AuthPage />,
                name: 'Auth page',
                description: 'Auth page description',
                title: 'NextGenCMS - auth'
            }
        )
    }
}