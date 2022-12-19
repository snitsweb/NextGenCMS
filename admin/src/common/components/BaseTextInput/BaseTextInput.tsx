import React, {useState} from 'react'
import s from './BaseTextInput.module.scss'
import {BaseFont} from '@common/components/BaseFont/BaseFont'

export interface IBaseTextInput {
	input: {
		placeholder: string,
		label: string,
		defaultValue?: string
	},
}

const BaseTextInput: React.FC<IBaseTextInput> = ({input}) => {

	const [value, setValue] = useState(input.defaultValue ? input.defaultValue : '')

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return (
		<div className={s.input_wrapper}>
			<BaseFont tag={'span'}>{input.label}</BaseFont>
			<input
				className={`${s.input}`}
				type="text"
				placeholder={input.placeholder}
				value={value}
				onChange={(event) => handleChange(event)}
			/>
		</div>
	)
}

export default BaseTextInput