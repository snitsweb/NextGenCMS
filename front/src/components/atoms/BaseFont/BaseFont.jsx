import s from './BaseFont.module.scss'

const BaseFont = ({children, className='', tag: Tag, color='default'}) => {
	return (
		<Tag className={`${s[color]} ${s[color]} ${className}`}>
			{children}
		</Tag>
	)
}
export default BaseFont
