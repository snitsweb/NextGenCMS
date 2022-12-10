/// <reference types="react-scripts" />
import {Application} from 'core/Application'
import {Controller} from 'common/core/Module/Controller'
import {PhotosController} from 'modules/Photos/core/PhotosController'

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
		photosController: PhotosController
	}
}