import React from 'react'
import s from './PageList.module.scss'
import {BaseContainer} from '@common/components/BaseContainer/BaseContainer'
import {useFetchPages} from '../../hooks/useFetchPages'
import PageListItem from '../../../Overview/pages/OverviewPage/components/PageListItem/PageListItem'
import {BaseFont} from '@common/components/BaseFont/BaseFont'
import {BaseButton} from '@common/components/BaseButton/BaseButton'
import {NavLink} from 'react-router-dom'
import {ReactComponent as AddIcon} from '@assets/svg/add.svg'

interface IPageList {
    classname?: string,
    children?: React.ReactNode
}

const PageList: React.FC<IPageList> = () => {
	const pages = useFetchPages()

	return (
		<section className={s.page_list}>
			<BaseContainer>
				<BaseFont className={s.page_list_title} tag={'h1'}>Pages</BaseFont>
				<div className={s.page_list_inner}>
					<div className={s.page_list_table_header}>
						<BaseFont tag={'h4'} weight={700} >Name</BaseFont>
						<BaseFont tag={'h4'} weight={700}>Status</BaseFont>
						<BaseFont tag={'h4'} weight={700}>Path</BaseFont>
						<BaseFont tag={'h4'} weight={700}>Action</BaseFont>
					</div>
					<div className={s.page_list_items}>
						{
							pages ?
								pages.map((page => {
									return <PageListItem page={page} key={page.path} />
								}))
								: ''
						}
					</div>
				</div>
			</BaseContainer>
			<NavLink to={'/pages/create'} className="fixed-btn-wrapper">
				<BaseButton type={'primary'} iconFill={'white'} icon={AddIcon}>Add page</BaseButton>
			</NavLink>
		</section>
	)
}

export default PageList