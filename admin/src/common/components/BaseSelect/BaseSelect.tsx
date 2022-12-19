import React, {useRef, useState} from 'react'
import s from './BaseSelect.module.scss'
import {BaseFont} from '../BaseFont/BaseFont'
import {ReactComponent as Arrow} from '@assets/svg/up-arrow.svg'
import {useOnClickOutside} from 'usehooks-ts'


export interface IBaseSelect {
	input: {
		placeholder: string,
		label: string,
		variants: {
			name: string,
			value: string
		}[],
		defaultValue?: {
			name: string,
			value: string
		}
	},
	className?: string
}

interface IValue {
	name: string,
	value: string
}

const BaseSelect: React.FC<IBaseSelect> = ({input, className}) => {

	const [value, setValue] = useState<IValue>(input.defaultValue ? input.defaultValue : {name: '', value: ''})
	const [isActive, setIsActive] = useState<boolean>(false)

	const selectRef = useRef(null)

	const handleToggle = () => {
		setIsActive(prevState => !prevState)
	}

	const handleSelectedValue = (obj: IValue) => {
		setValue(obj)
		handleToggle()
	}

	const handleClickOutside = () => {
		setIsActive(false)
	}

	useOnClickOutside(selectRef, handleClickOutside)

	return (
		<div className={`${s.select_wrapper} ${className ? className : ''}`} ref={selectRef}>
			{input.label ? <BaseFont className={s.label} tag={'span'}>{input.label}</BaseFont> : ''}
			<div className={s.select} onClick={handleToggle}>
				<BaseFont tag={'span'}>{value.name || input.placeholder}</BaseFont>
				<Arrow className={`${s.arrow} ${isActive && s.arrow_active}`}/>
			</div>
			<div className={`${s.select_popup} ${isActive && s.select_popup_active}`}>
				{input.variants.map((variant) => {
					return (
						<div
							key={variant.value}
							className={`${s.select_item} ${value.value === variant.value && s.select_item_active}`}
							onClick={() => handleSelectedValue(variant)}
						>
							<BaseFont tag={'span'}>{variant.name}</BaseFont>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default BaseSelect