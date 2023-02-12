import {IModuleRoute} from 'common/core/Module/IModuleRoute'
import {FunctionComponent} from 'react'
import {Reducer} from '@reduxjs/toolkit'

export abstract class Module {
    static defaultPath = '/'
    static moduleName: string
    static icon: FunctionComponent
    routes: IModuleRoute[] = []
    reducer: Reducer | null

    constructor() {
        this.init()
    }

    init(): void {
        this.registerRoutes()
        this.setReducer()
        this.getData()
    }

    registerRoutes(): void {
    }

    setReducer(): void {
        this.reducer = null
    }

    getData() {}
}