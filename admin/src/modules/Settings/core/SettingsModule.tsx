import {Module} from '@common/core/Module/Module'
import {ReactComponent as Icon} from '@assets/svg/settings.svg'
import SettingsPage from '@modules/Settings/pages/SettingsPage/SettingsPage'

export class SettingsModule extends Module {
    static defaultPath = '/settings'
    static moduleName = 'Settings'
    static icon = Icon

    registerRoutes() {
        this.routes.push({
            path: '/settings',
            element: <SettingsPage />,
            name: 'Settings Page',
            description: 'Settings page description',
            title: 'Settings'
        })
    }
}