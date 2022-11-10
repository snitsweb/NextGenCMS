import {IModuleRoute} from 'common/core/Module/IModuleRoute'
import {FunctionComponent} from 'react'

export abstract class Module {
	static moduleName: string
	static icon: FunctionComponent
	routes: IModuleRoute[] = []
}