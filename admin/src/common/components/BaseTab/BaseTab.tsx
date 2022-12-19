import React from 'react'
import s from './BaseTab.module.scss'

export interface ITab {
	children: React.ReactNode
	title: string
	name: string
	isActive?: boolean
}

const BaseTab: React.FC<ITab> = ({title, children, isActive}) => {
	return (
		<div className={`${s.tab} ${isActive && s.tab_active}`} title={title}>
			{isActive && children}
		</div>
	)
}

export default BaseTab