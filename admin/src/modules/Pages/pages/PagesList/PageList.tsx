import {setPages} from '@modules/Pages/core/reducer'
import {useAppSelector} from 'hooks/redux/useAppSelector'
import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import s from './PageList.module.scss'
import {BaseContainer} from '@common/components/BaseContainer/BaseContainer'
import PageListItem from '../../../Overview/pages/OverviewPage/components/PageListItem/PageListItem'
import {BaseFont} from '@common/components/BaseFont/BaseFont'
import {BaseButton} from '@common/components/BaseButton/BaseButton'
import {NavLink} from 'react-router-dom'
import {ReactComponent as AddIcon} from '@assets/svg/add.svg'

interface SubpageResponse {
	id: number,
	layout: object,
	meta: object,
	socials: object,
	subpages: {
		id: number,
		meta: object
		sections: [],
		value: {
			meta: {
				id: number
				description: string
				name: string
				path: string
				title: string
			}
		}
	}[]
}

const PageList = () => {
	useEffect(() => {
		const fetchPage = async () => {
			return await window.app.nc.http.get<SubpageResponse>(`/page/${process.env.REACT_APP_PAGE_ID}`)
		}

		fetchPage()
			.catch(e => console.error(e))
			.then((response) => {
				if (!response?.data.subpages) return
				dispatch(setPages(response.data.subpages.map(subpage => {
					return {
						id: subpage.id,
						name: subpage.value.meta.name,
						status: 'published',
						path: subpage.value.meta.path,
						value: {}
					}
				})))
			})
	}, [])

	const pages = useAppSelector(state => state.pagesModule.pages)
	const dispatch = useDispatch()

	return (
		<section className={s.page_list}>
			<BaseContainer>
				<BaseFont className={s.page_list_title} tag={'h1'}>Pages</BaseFont>
				<div className={s.page_list_inner}>
					<div className={s.page_list_table_header}>
						<BaseFont tag={'h4'} weight={700}>Name</BaseFont>
						<BaseFont tag={'h4'} weight={700}>Status</BaseFont>
						<BaseFont tag={'h4'} weight={700}>Path</BaseFont>
						<BaseFont tag={'h4'} weight={700}>Action</BaseFont>
					</div>
					<div className={s.page_list_items}>
						{
							pages ?
								pages.map((page => {
									return <PageListItem page={page} key={page.path}/>
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