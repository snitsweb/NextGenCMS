import React from 'react'
import {IReactRoute} from 'core/IReactRoute'

export interface IModuleRoute extends IReactRoute{
	name: string
	description: string
	title: string
}