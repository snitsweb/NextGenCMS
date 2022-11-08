import {ReactNode} from "react";

export interface IBaseFont {
    tag: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4'
    color?: string,
    children?: string,
    className?: string
}