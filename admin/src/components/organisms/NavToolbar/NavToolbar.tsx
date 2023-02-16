import React from 'react'
import ThemeSwitcher from '../../molecules/ThemeSwitcher/ThemeSwitcher'
import LogoutButton from '../../molecules/LogoutButton/LogoutButton'
import s from './Navtoolbar.module.scss'

const NavToolbar = () => {
    return (
        <div className={s.nav_toolbar}>
            <ThemeSwitcher />
            <div className={s.nav_toolbar_bottom}>
                <LogoutButton />
            </div>
        </div>
    )
}

export default NavToolbar