import React, { useState } from 'react'
import { Switch } from '@mui/material'
import Cookies from 'js-cookie'
import s from './ThemeSwitcher.module.scss'
import LightModeIcon from '@mui/icons-material/LightMode'
import NightlightIcon from '@mui/icons-material/Nightlight'


const ThemeSwitcher = () => {

    const [theme, setTheme] = useState<'light'|'dark'>(window.app.theme.palette.mode)

    const handleChange = () => {
        if(theme === 'dark'){
            setTheme('light')
            Cookies.set('theme-alias', 'light')
        } else {
            setTheme('dark')
            Cookies.set('theme-alias', 'dark')
        }
        location.reload()
    }

    return (
        <div className={s.switcher}>
            <LightModeIcon/>
            <Switch
                checked={theme === 'dark'}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <NightlightIcon />
        </div>
    )
}

export default ThemeSwitcher