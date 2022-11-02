import s from './BaseFont.module.scss'

const BaseFont = ({children, className='', tag: Tag, color='default'}) => {
	return (
		<Tag className={`${s[color]} ${className} ${s[window.app.layout.alias]}`}>
			{children}
		</Tag>
	)
}
export default BaseFont
