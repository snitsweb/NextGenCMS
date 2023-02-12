import s from './MenuItem.module.scss'
import React from 'react'
import {NavLink} from 'react-router-dom'
import { Typography } from '@mui/material'

export interface IMenuItem {
  name: string,
  icon: any,
  path: string,
  isActive: boolean
}

export const MenuItem: React.FC<IMenuItem> = ({icon: Icon, name, path, isActive}) => {
    return (
        <NavLink to={path} className={`${s.menu_item} ${isActive && s.menu_item_active}`}>
            <Icon className={s.menu_item_icon} />
            <Typography variant="h6" color="text.primary">
                {name}
            </Typography>
        </NavLink>
    )
}