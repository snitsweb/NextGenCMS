import s from './BaseContainer.module.scss'

const BaseContainer = ({children}) => {
	return (
		<div className={s.container}>
			{children}
		</div>
	)
}

export default BaseContainer
