import {useState} from 'react'
import {IBaseSelectValue} from '@common/components/BaseSelect/BaseSelect'

interface IProps {
	placeholder: string
	label: string
	variants:
		{
			name: string
			value: string
		}[]
	defaultValue: {
		name: string
		value: string
	}
}

export const useBaseSelect = (inputSchema: IProps) => {
	return  useState<IBaseSelectValue>(inputSchema.defaultValue ? inputSchema.defaultValue : {name: '', value: ''})
}