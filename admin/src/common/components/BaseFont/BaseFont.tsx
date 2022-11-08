import React from 'react'
import {IBaseFont} from './IBaseFont'
import s from './BaseFont.module.scss'

export const BaseFont: React.FC<IBaseFont> = props => {
	const {tag, color = 'secondary', className, children} = props
	const Component = tag
	const extendedClassNames = `${className ? className : ''} ${s[tag]} ${s['color-' + color]}`

	return <>
		<Component className={extendedClassNames}>
			{children}
		</Component>
	</>
}