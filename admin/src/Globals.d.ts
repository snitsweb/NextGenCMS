/// <reference types="react-scripts" />
import {Application} from 'core/Application'

declare module '*.module.css';
declare module '*.module.scss';
declare module '*.svg' {
	import * as React from 'react'

	const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
	export default content
}

declare global {
	interface Window {
		app: Application;
	}
}