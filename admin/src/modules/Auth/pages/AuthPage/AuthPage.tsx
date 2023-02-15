import React, { useEffect, useState } from 'react'
import s from './AuthPage.module.scss'
import { BaseContainer } from '@common/components/BaseContainer/BaseContainer'
import { SchemaType } from '@common/types/Schema.type'
import { useSchemaForm } from '../../../../hooks/useSchemaForm'
import { AuthData } from '@common/types'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { setIsLoggedIn } from '@modules/Auth/core/reducer'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'

const authSchema: SchemaType = [
    {
        type: 'text_input',
        defaultValue: 'example@gmail.com',
        attribute: 'email',
        label: 'Email'
    },
    {
        type: 'text_input',
        defaultValue: '',
        attribute: 'password',
        label: 'Password'
    }
]

const AuthPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLoggedIn = () => {
        dispatch(setIsLoggedIn(true))
        navigate('/home')
    }

    useEffect(() => {
        const accessToken = Cookies.get('access-token')
        if(accessToken) handleLoggedIn()
    }, [])

    const [error, setError] = useState<boolean>(false)

    const onSubmit = (data: AuthData) => {
        window.app.nc.authorization(data, (data) => {
            if(data.error) setError(true)
            handleLoggedIn()
        })
    }

    const Form = useSchemaForm({
        schema: authSchema,
        onSubmit,
        button: {
            text: 'Log in'
        }
    })

    return (
        <div className={s.auth_page}>
            <BaseContainer>
                <div className={s.auth_page_inner}>
                    <svg className={s.auth_page_logo} width="214" height="36" viewBox="0 0 214 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_6_17)">
                            <path
                                d="M0.872009 16.904L16.388 10.352L17.576 13.916L5.51601 18.74L17.576 23.564L16.388 27.128L0.872009 20.576V16.904ZM41.6743 10.784C42.5143 10.544 43.6063 10.316 44.9503 10.1C46.2943 9.88401 47.7823 9.77601 49.4143 9.77601C50.9503 9.77601 52.2343 9.99201 53.2663 10.424C54.2983 10.832 55.1143 11.42 55.7143 12.188C56.3383 12.932 56.7703 13.844 57.0103 14.924C57.2743 15.98 57.4063 17.144 57.4063 18.416V29H53.0503V19.1C53.0503 18.092 52.9783 17.24 52.8343 16.544C52.7143 15.824 52.4983 15.248 52.1863 14.816C51.8983 14.36 51.4903 14.036 50.9623 13.844C50.4583 13.628 49.8343 13.52 49.0903 13.52C48.5383 13.52 47.9623 13.556 47.3623 13.628C46.7623 13.7 46.3183 13.76 46.0303 13.808V29H41.6743V10.784ZM67.1249 29H62.7689V10.172H67.1249V29ZM67.5929 4.66401C67.5929 5.48001 67.3289 6.12801 66.8009 6.60801C66.2729 7.08801 65.6489 7.32801 64.9289 7.32801C64.1849 7.32801 63.5489 7.08801 63.0209 6.60801C62.4929 6.12801 62.2289 5.48001 62.2289 4.66401C62.2289 3.82401 62.4929 3.16401 63.0209 2.68401C63.5489 2.20401 64.1849 1.96401 64.9289 1.96401C65.6489 1.96401 66.2729 2.20401 66.8009 2.68401C67.3289 3.16401 67.5929 3.82401 67.5929 4.66401ZM72.4662 5.20401L76.8222 4.48401V10.172H83.5182V13.808H76.8222V21.476C76.8222 22.988 77.0622 24.068 77.5422 24.716C78.0222 25.364 78.8382 25.688 79.9902 25.688C80.7822 25.688 81.4782 25.604 82.0782 25.436C82.7022 25.268 83.1942 25.112 83.5542 24.968L84.2742 28.424C83.7702 28.64 83.1102 28.856 82.2942 29.072C81.4782 29.312 80.5182 29.432 79.4142 29.432C78.0702 29.432 76.9422 29.252 76.0302 28.892C75.1422 28.532 74.4342 28.016 73.9062 27.344C73.3782 26.648 73.0062 25.82 72.7902 24.86C72.5742 23.876 72.4662 22.76 72.4662 21.512V5.20401ZM92.445 25.868C93.597 25.868 94.437 25.736 94.965 25.472C95.493 25.184 95.757 24.704 95.757 24.032C95.757 23.408 95.469 22.892 94.893 22.484C94.341 22.076 93.417 21.632 92.121 21.152C91.329 20.864 90.597 20.564 89.925 20.252C89.277 19.916 88.713 19.532 88.233 19.1C87.753 18.668 87.369 18.152 87.081 17.552C86.817 16.928 86.685 16.172 86.685 15.284C86.685 13.556 87.321 12.2 88.593 11.216C89.865 10.208 91.593 9.70401 93.777 9.70401C94.881 9.70401 95.937 9.81201 96.945 10.028C97.953 10.22 98.709 10.412 99.213 10.604L98.421 14.132C97.941 13.916 97.329 13.724 96.585 13.556C95.841 13.364 94.977 13.268 93.993 13.268C93.105 13.268 92.385 13.424 91.833 13.736C91.281 14.024 91.005 14.48 91.005 15.104C91.005 15.416 91.053 15.692 91.149 15.932C91.269 16.172 91.461 16.4 91.725 16.616C91.989 16.808 92.337 17.012 92.769 17.228C93.201 17.42 93.729 17.624 94.353 17.84C95.385 18.224 96.261 18.608 96.981 18.992C97.701 19.352 98.289 19.772 98.745 20.252C99.225 20.708 99.573 21.236 99.789 21.836C100.005 22.436 100.113 23.156 100.113 23.996C100.113 25.796 99.441 27.164 98.097 28.1C96.777 29.012 94.881 29.468 92.409 29.468C90.753 29.468 89.421 29.324 88.413 29.036C87.405 28.772 86.697 28.556 86.289 28.388L87.045 24.752C87.693 25.016 88.461 25.268 89.349 25.508C90.261 25.748 91.293 25.868 92.445 25.868ZM115.414 17.156C114.862 19.268 114.262 21.332 113.614 23.348C112.99 25.34 112.366 27.224 111.742 29H108.178C107.698 27.896 107.194 26.636 106.666 25.22C106.138 23.804 105.61 22.292 105.082 20.684C104.554 19.076 104.026 17.384 103.498 15.608C102.97 13.832 102.454 12.02 101.95 10.172H106.558C106.774 11.18 107.026 12.272 107.314 13.448C107.602 14.6 107.902 15.788 108.214 17.012C108.526 18.212 108.85 19.388 109.186 20.54C109.522 21.692 109.858 22.748 110.194 23.708C110.554 22.604 110.902 21.464 111.238 20.288C111.598 19.112 111.934 17.936 112.246 16.76C112.558 15.584 112.846 14.444 113.11 13.34C113.398 12.212 113.65 11.156 113.866 10.172H117.214C117.43 11.156 117.67 12.212 117.934 13.34C118.198 14.444 118.474 15.584 118.762 16.76C119.074 17.936 119.398 19.112 119.734 20.288C120.094 21.464 120.454 22.604 120.814 23.708C121.126 22.748 121.45 21.692 121.786 20.54C122.122 19.388 122.446 18.212 122.758 17.012C123.094 15.788 123.406 14.6 123.694 13.448C123.982 12.272 124.234 11.18 124.45 10.172H128.95C128.446 12.02 127.93 13.832 127.402 15.608C126.874 17.384 126.346 19.076 125.818 20.684C125.29 22.292 124.762 23.804 124.234 25.22C123.706 26.636 123.19 27.896 122.686 29H119.158C118.534 27.224 117.886 25.34 117.214 23.348C116.566 21.332 115.966 19.268 115.414 17.156ZM131.228 19.676C131.228 18.02 131.468 16.568 131.948 15.32C132.452 14.072 133.112 13.04 133.928 12.224C134.744 11.384 135.68 10.76 136.736 10.352C137.792 9.92001 138.872 9.70401 139.976 9.70401C142.568 9.70401 144.584 10.508 146.024 12.116C147.488 13.724 148.22 16.124 148.22 19.316C148.22 19.556 148.208 19.832 148.184 20.144C148.184 20.432 148.172 20.696 148.148 20.936H135.728C135.848 22.448 136.376 23.624 137.312 24.464C138.272 25.28 139.652 25.688 141.452 25.688C142.508 25.688 143.468 25.592 144.332 25.4C145.22 25.208 145.916 25.004 146.42 24.788L146.996 28.352C146.756 28.472 146.42 28.604 145.988 28.748C145.58 28.868 145.1 28.976 144.548 29.072C144.02 29.192 143.444 29.288 142.82 29.36C142.196 29.432 141.56 29.468 140.912 29.468C139.256 29.468 137.816 29.228 136.592 28.748C135.368 28.244 134.36 27.56 133.568 26.696C132.776 25.808 132.188 24.776 131.804 23.6C131.42 22.4 131.228 21.092 131.228 19.676ZM143.864 17.732C143.864 17.132 143.78 16.568 143.612 16.04C143.444 15.488 143.192 15.02 142.856 14.636C142.544 14.228 142.148 13.916 141.668 13.7C141.212 13.46 140.66 13.34 140.012 13.34C139.34 13.34 138.752 13.472 138.248 13.736C137.744 13.976 137.312 14.3 136.952 14.708C136.616 15.116 136.352 15.584 136.16 16.112C135.968 16.64 135.836 17.18 135.764 17.732H143.864ZM165.33 19.532C165.33 17.684 164.958 16.22 164.214 15.14C163.494 14.06 162.342 13.52 160.758 13.52C160.038 13.52 159.354 13.628 158.706 13.844C158.082 14.06 157.578 14.3 157.194 14.564V25.4C157.506 25.472 157.902 25.544 158.382 25.616C158.886 25.664 159.486 25.688 160.182 25.688C161.79 25.688 163.05 25.148 163.962 24.068C164.874 22.964 165.33 21.452 165.33 19.532ZM169.794 19.604C169.794 21.116 169.566 22.484 169.11 23.708C168.678 24.908 168.042 25.94 167.202 26.804C166.386 27.668 165.39 28.328 164.214 28.784C163.038 29.24 161.706 29.468 160.218 29.468C158.778 29.468 157.398 29.36 156.078 29.144C154.782 28.928 153.702 28.688 152.838 28.424V1.78401L157.194 1.06401V10.82C157.698 10.556 158.31 10.316 159.03 10.1C159.774 9.88401 160.59 9.77601 161.478 9.77601C162.798 9.77601 163.974 10.016 165.006 10.496C166.062 10.952 166.938 11.612 167.634 12.476C168.33 13.34 168.858 14.384 169.218 15.608C169.602 16.808 169.794 18.14 169.794 19.604ZM183.406 35.66H178.942L191.11 0.812012H195.502L183.406 35.66ZM213.467 20.576L197.951 27.128L196.763 23.564L208.823 18.74L196.763 13.916L197.951 10.352L213.467 16.904V20.576Z"
                                fill="#893168" />
                            <path
                                d="M28.4969 25.616C30.1289 25.616 31.3169 25.34 32.0609 24.788C32.8049 24.236 33.1769 23.456 33.1769 22.448C33.1769 21.848 33.0449 21.332 32.7809 20.9C32.5409 20.468 32.1809 20.084 31.7009 19.748C31.2449 19.388 30.6809 19.064 30.0089 18.776C29.3369 18.464 28.5689 18.164 27.7049 17.876C26.8409 17.564 26.0009 17.228 25.1849 16.868C24.3929 16.484 23.6849 16.016 23.0609 15.464C22.4609 14.912 21.9689 14.252 21.5849 13.484C21.2249 12.716 21.0449 11.792 21.0449 10.712C21.0449 8.45601 21.8249 6.69201 23.3849 5.42001C24.9449 4.12401 27.0689 3.47601 29.7569 3.47601C31.3169 3.47601 32.6969 3.65601 33.8969 4.01601C35.1209 4.35201 36.0809 4.72401 36.7769 5.13201L35.3729 8.80401C34.5569 8.34801 33.6569 8.00001 32.6729 7.76001C31.7129 7.52001 30.7169 7.40001 29.6849 7.40001C28.4609 7.40001 27.5009 7.65201 26.8049 8.15601C26.1329 8.66001 25.7969 9.36801 25.7969 10.28C25.7969 10.832 25.9049 11.312 26.1209 11.72C26.3609 12.104 26.6849 12.452 27.0929 12.764C27.5249 13.076 28.0169 13.364 28.5689 13.628C29.1449 13.892 29.7689 14.144 30.4409 14.384C31.6169 14.816 32.6609 15.26 33.5729 15.716C34.5089 16.148 35.2889 16.676 35.9129 17.3C36.5609 17.9 37.0529 18.62 37.3889 19.46C37.7249 20.276 37.8929 21.272 37.8929 22.448C37.8929 24.704 37.0889 26.456 35.4809 27.704C33.8969 28.928 31.5689 29.54 28.4969 29.54C27.4649 29.54 26.5169 29.468 25.6529 29.324C24.8129 29.204 24.0569 29.048 23.3849 28.856C22.7369 28.664 22.1729 28.472 21.6929 28.28C21.2129 28.064 20.8289 27.872 20.5409 27.704L21.8729 23.996C22.5209 24.356 23.3969 24.716 24.5009 25.076C25.6049 25.436 26.9369 25.616 28.4969 25.616Z"
                                fill="url(#paint0_linear_6_17)" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_6_17" x1="107.5" y1="-4.99999" x2="107.5" y2="36"
                                gradientUnits="userSpaceOnUse">
                                <stop stopColor="#0047FF" />
                                <stop offset="1" stopColor="#FFF500" />
                            </linearGradient>
                            <clipPath id="clip0_6_17">
                                <rect width="214" height="36" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    {
                        error && <Typography variant={'body1'} color={'error'}>Invalid email or password</Typography>
                    }
                    <Form />
                </div>
            </BaseContainer>
        </div>
    )
}

export default AuthPage