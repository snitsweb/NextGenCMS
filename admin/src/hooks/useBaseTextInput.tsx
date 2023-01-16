import {useState} from 'react'

interface IProps {
	defaultValue: string
	placeholder: string
	label: string
}

export const useBaseTextInput = (inputSchema: IProps) => {
	return  useState<string>(inputSchema.defaultValue)
}