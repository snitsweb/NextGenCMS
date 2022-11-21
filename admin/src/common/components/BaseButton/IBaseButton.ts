export interface IBaseButton {
	children: string
	onClick?: () => void
	className?: string
	type?: 'primary' | 'bordered'
	icon?: any
	iconFill?: 'primary' | 'white' | 'dark'
}