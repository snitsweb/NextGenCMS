import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setIsLoggedIn } from '@modules/Auth/core/reducer'
import Cookies from 'js-cookie'
import s from './LogoutButton.module.scss'

const LogoutButton = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        Cookies.remove('access-token')
        Cookies.remove('refresh-token')
        dispatch(setIsLoggedIn(false))
        navigate('/auth')
    }

    return (
        <Button
            variant="contained"
            color="error"
            onClick={handleLogout}
            className={s.logout_button}
        >
            Logout
        </Button>
    )
}

export default LogoutButton