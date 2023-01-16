import React from 'react'
import s from './BaseTextInput.module.scss'
import {BaseFont} from '@common/components/BaseFont/BaseFont'

export interface IBaseTextInput {
	input: {
		placeholder: string,
		label: string,
		defaultValue?: string
	},
	value: string,
	// eslint-disable-next-line no-unused-vars
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const BaseTextInput: React.FC<IBaseTextInput> = ({input, value, onChange}) => {

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event)
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