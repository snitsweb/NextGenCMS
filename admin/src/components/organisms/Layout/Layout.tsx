import React, { useEffect } from 'react'
import s from './Layout.module.scss'
import {Navbar} from '../Navbar/Navbar'
import { useAppSelector } from '../../../hooks/redux/useAppSelector'
import { useNavigate } from 'react-router-dom'

export interface ILayout {
  children?: JSX.Element
}
export const Layout: React.FC<ILayout> = ({children}) => {

    const navigate = useNavigate()

    const isLoggedIn = useAppSelector((state) => state.authModule.isLoggedIn) && window.location.pathname !== '/auth'

    useEffect(() => {
        if(!isLoggedIn) navigate('/auth')
    }, [])

    return (
        <>
            <div className={s.layout}>
                {isLoggedIn && <Navbar className={s.navbar}/>}
                <div className={s.content}>
                    <div className={s.page_content}>
                        {children}
                    </div>
                </div>
            </div>
        </>

    )
}