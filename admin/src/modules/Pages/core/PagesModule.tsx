import {Module} from '@common/core/Module/Module'
import {ReactComponent as Icon} from '../assets/svg/pages.svg'
import React from 'react'
import PageList from '../pages/PagesList/PageList'
import PageEdit from '../pages/PageEdit/PageEdit'
import PageCreate from '@modules/Pages/pages/PageCreate/PageCreate'

export class PagesModule extends Module {
    static defaultPath = '/pages'
    static moduleName = 'Pages'
    static icon = Icon

    registerRoutes() {
        this.routes.push(
            {
                path: '/pages',
                element: <PageList/>,
                name: 'Overview Page',
                description: 'Overview page description',
                title: 'Overview'
            }
        )
        this.routes.push(
            {
                path: '/pages/edit/:id',
                element: <PageEdit/>,
                name: 'Edit Page',
                description: 'Edit page description',
                title: 'Edit page'
            }
        )
        this.routes.push(
            {
                path: '/pages/create',
                element: <PageCreate/>,
                name: 'Create Page',
                description: 'Create page description',
                title: 'Create page'
            }
        )
    }
}