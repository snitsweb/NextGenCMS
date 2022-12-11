import {ReactNode} from 'react'

export interface IBaseFont {
    tag: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4'
    color?: string,
    children?: string,
    className?: string
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
}