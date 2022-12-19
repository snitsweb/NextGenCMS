import {IHeader} from './IHeader'
import s from './Header.module.scss'
import React from 'react'
import {BaseFont} from 'common/components/BaseFont/BaseFont'

export const Header: React.FC<IHeader> = () => {
	return (
		<header className={s.header}>
			<BaseFont tag={'h2'} color={'white'}>Header</BaseFont>
		</header>
	)
}