import {Module} from '@common/core/Module/Module'
import { SvgIconProps } from '@mui/material'

interface IRoute {
	path: string
	icon: (props: SvgIconProps) => JSX.Element
	name: string
	module: Module
}

export class Route {
    module: Module
    path: string
    icon: (props: SvgIconProps) => JSX.Element
    name: string

    constructor({path, icon, name, module}: IRoute) {
        this.path = path
        this.icon = icon
        this.name = name
        this.module = module
    }

    get isActive () {
        return Object.getPrototypeOf(this.module).constructor.defaultPath.includes(window.location.pathname)
    }
}