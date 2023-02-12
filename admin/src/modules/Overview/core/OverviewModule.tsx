import React from 'react'
import {Module} from 'common/core/Module/Module'
import {OverviewPage} from 'modules/Overview/pages/OverviewPage/OverviewPage'
import reducer from '@modules/Overview/core/reducer'
import QueryStatsIcon from '@mui/icons-material/QueryStats'

export class OverviewModule extends Module {
    static defaultPath = '/home'
    static moduleName = 'Overview'
    static icon = QueryStatsIcon

    registerRoutes(): void {
        this.routes.push(
            {
                path: '/home',
                element: <OverviewPage />,
                name: 'Overview Page',
                description: 'Overview page description',
                title: 'Overview'
            }
        )
    }

    setReducer() {
        this.reducer = reducer
    }
}