import s from './BaseFont.module.scss'

const BaseFont = ({children, tag: Tag, color='default'}) => {
	return (
		<Tag className={`${s[color]} ${s[color]}`}>
			{children}
		</Tag>
	)
}
export default BaseFont
