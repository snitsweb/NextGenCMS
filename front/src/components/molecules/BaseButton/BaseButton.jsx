import s from './BaseButton.module.scss'

const BaseButton = ({
	theme='default',
	text='',
	onClick,
	className
}) => {
	return (
		<a onClick={onClick} className={`${s.base_button} ${s[theme]} ${className ? className : ''}`} href="#">
			<span className={`${s.base_button_text} ${s[theme]}`}>{text}</span>
		</a>
	)
}

export default BaseButton
