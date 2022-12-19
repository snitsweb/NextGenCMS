import React from 'react'
import {IBaseFont} from './IBaseFont'
import s from './BaseFont.module.scss'

export const BaseFont: React.FC<IBaseFont> = ({tag, color='secondary', className, children, weight}) => {
	const Component = tag
	const extendedClassNames = `${className ? className : ''}
								${s[tag]} ${s['color-' + color]}
								${weight ? s['weight-' + weight] : s['weight-400']}`

	return <>
		<Component className={extendedClassNames}>
			{children}
		</Component>
	</>
}