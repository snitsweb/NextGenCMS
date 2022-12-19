import React, {Children, useEffect, useState} from 'react'
import {ITab} from '@common/components/BaseTab/BaseTab'
import s from './BaseTabSection.module.scss'
import {BaseFont} from '@common/components/BaseFont/BaseFont'

interface ITabSection {
	children: React.ReactElement<ITab>[] | React.ReactElement
}

const BaseTabSection: React.FC<ITabSection> = ({children}) => {

	const elements: {name: string, title: string}[] = []
	const [activeTab, setActiveTab] = useState<{name: string, title: string}>({name: '', title: ''})

	const isTabActive = (title: string) => {
		if(activeTab) return activeTab.title === title
		return false
	}

	const childrenWithProps = Children.map(children, (me: React.ReactElement<ITab>) => {
		elements.push({
			title: me.props.title,
			name: me.props.name
		})

		if(React.isValidElement(me)) {
			return React.cloneElement(me, {
				isActive: isTabActive(me.props.title)
			})
		}
	})

	const handleTabChange = (tab: {name: string, title: string}) => {
		setActiveTab(tab)
	}

	useEffect(() => {
		setActiveTab(elements[0])
	}, [])

	return (
		<div className={s.tabs}>

			<div className={s.tabs_wrapper}>
				{elements.map(el => { return (
					<div
						key={el.title}
						onClick={() => handleTabChange(el)}
						className={`${el.title === activeTab.title && s.active}`}
					>
						<BaseFont color={'white'} tag={'span'}>{el.name}</BaseFont>
					</div>
				)})}
			</div>

			<div className={s.tabs_content}>
				{childrenWithProps}
			</div>
		</div>
	)
}

export default BaseTabSection