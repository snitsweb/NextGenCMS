import React from 'react'
import s from './Navbar.module.scss'
import {MenuItem} from '../../molecules/MenuItem/MenuItem'
import ThemeSwitcher from '../../molecules/ThemeSwitcher/ThemeSwitcher'

export interface INavbar {
    className?: string
}

export const Navbar: React.FC<INavbar> = ({className}) => {

    const extendedClassname = `${className} ${s.navbar}`

    const menuItems = window.app.routes

    return (
        <menu className={extendedClassname}>
            {
                menuItems ? menuItems.map(item => <MenuItem
                    name={item.name}
                    icon={item.icon}
                    path={item.path}
                    isActive={item.isActive}
                    key={item.name}
                />) : ''
            }
            <ThemeSwitcher />
        </menu>
    )
}