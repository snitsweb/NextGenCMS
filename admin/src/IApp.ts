import {ReactNode} from 'react'

export interface IApp {
	children?: ReactNode
	type?: string,
	key?: string
}