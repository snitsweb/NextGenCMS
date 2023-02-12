import React, { ReactNode } from 'react'
import s from './Layout.module.scss'
import {Navbar} from '../Navbar/Navbar'

export interface ILayout {
  children?: ReactNode[]
}
export const Layout: React.FC<ILayout> = ({children}) => {
    return (
        <>
            <div className={s.layout}>
                <Navbar className={s.navbar}/>
                <div className={s.content}>
                    <div className={s.page_content}>
                        {children}
                    </div>
                </div>
            </div>
        </>

    )
}