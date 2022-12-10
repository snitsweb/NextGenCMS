import {Module} from "../../../common/core/Module/Module"
import {ReactComponent as Icon} from '../assets/svg/pages.svg'
import React from "react";
import PageList from "../pages/PagesList/PageList";

export class PagesModule extends Module {
    static defaultPath = '/pages/'
    static moduleName = 'Pages'
    static icon = Icon

    registerRoutes(): void {
        this.routes.push(
            {
                path: '/pages/',
                element: <PageList />,
                name: 'Overview Page',
                description: 'Overview page description',
                title: 'Overview'
            }
        )
    }
}