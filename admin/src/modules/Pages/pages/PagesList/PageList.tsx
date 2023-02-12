import { Page, setPages } from '@modules/Pages/core/reducer'
import { useAppSelector } from 'hooks/redux/useAppSelector'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import s from './PageList.module.scss'
import { BaseContainer } from '@common/components/BaseContainer/BaseContainer'
import PageListItem from '../../../Overview/pages/OverviewPage/components/PageListItem/PageListItem'
import { NavLink } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const PageList = () => {
    useEffect(() => {
        const fetchPage = async () => {
            return await window.app.nc.http.get<Page[]>('/pages')
        }

        fetchPage()
            .catch((e) => console.error(e))
            .then((response) => {
                if (!response?.data.length) return
                dispatch(setPages(response.data))
            })
    }, [])

    const pages = useAppSelector((state) => state.pagesModule.pages)
    const dispatch = useDispatch()

    return (
        <section className={s.page_list}>
            <BaseContainer>
                <Typography className={s.page_list_title} variant="h2" color="text.primary" textTransform="uppercase" fontWeight="bold">
                  Pages
                </Typography>
                <div className={s.page_list_inner}>
                    {pages.length ? (
                        <>
                            <div className={s.page_list_table_header}>
                                <Typography color="text.primary" variant="body1" fontWeight="bold" textTransform="uppercase"> Name </Typography>
                                <Typography color="text.primary" variant="body1" fontWeight="bold" textTransform="uppercase"> Status </Typography>
                                <Typography color="text.primary" variant="body1" fontWeight="bold" textTransform="uppercase"> Path </Typography>
                                <Typography color="text.primary" variant="body1" fontWeight="bold" textTransform="uppercase"> Action </Typography>
                            </div>
                            <div className={s.page_list_items}>
                                {pages
                                    ? pages.map((page) => {
                                        return <PageListItem page={page} key={page.path} />
                                    })
                                    : ''}
                            </div>
                        </>
                    ) : (
                        <>
                            <span>
															There is no pages yet...
                            </span>
                        </>
                    )}
                </div>
            </BaseContainer>
            <NavLink to={'/pages/create'} className="fixed-btn-wrapper">
                <Button
                    variant="contained"
                    size="large"
                    startIcon={<AddIcon color="action" />}
                > Add page </Button>
            </NavLink>
        </section>
    )
}

export default PageList
