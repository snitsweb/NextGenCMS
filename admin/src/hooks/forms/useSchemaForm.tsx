import { SchemaType } from '@common/types/Schema.type'
import { Controller, useForm } from 'react-hook-form'
import { Button, TextField, Typography } from '@mui/material'
import { FC, ReactNode } from 'react'
import { convertToRaw, EditorState } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { useTextField } from './useTextField'
import { useSelectInput } from './useSelectInput'
import { useEditorInput } from './useEditorInput'


type keyObject = {
    [key: string]: string
}

interface IUsePageForm {
    schema: SchemaType,
    onSubmit: (data: any) => void,
    button: {
        icon?: ReactNode,
        text: string
    }
}

const convertEditorStateToHTML = (state: EditorState | string) => {
    if(typeof state === 'string') return state
    return draftToHtml(convertToRaw(state.getCurrentContent()))
}

export const useSchemaForm = ({schema, onSubmit, button }: IUsePageForm): FC  => {

    const defaultValues: keyObject = {}
    schema.forEach(input => {
        defaultValues[input.attribute as keyof typeof defaultValues] = input.defaultValue as string
    })

    const { control, handleSubmit } = useForm({
        defaultValues: defaultValues
    })

    const customFormHandler = (data: any) => {
        for (const [key, value] of Object.entries(data)) {
            if (schema.find(input => input.attribute === key && input.type === 'editor_input')) {
                data[key] = convertEditorStateToHTML(value as EditorState)
            }
        }
        onSubmit(data)
    }

    const Form = () => <form onSubmit={handleSubmit(customFormHandler)} className={'form'}>
        <div className={'form-inner'}>
            {
                schema.map(input => {
                    if(input.type === 'text_input') {
                        return useTextField({
                            attribute: input.attribute,
                            label: input.label,
                            control
                        })
                    } else if (input.type === 'select_input') {
                        return useSelectInput({
                            attribute: input.attribute,
                            label: input.label,
                            options: input.options,
                            control
                        })
                    } else if (input.type === 'editor_input') {
                        return useEditorInput({
                            attribute: input.attribute,
                            label: input.label,
                            control,
                            defaultValue: input.defaultValue
                        })
                    } else if (input.type === 'password_input') {
                        return useTextField({
                            attribute: input.attribute,
                            label: input.label,
                            type: 'password',
                            control
                        })
                    }
                })
            }
        </div>
        <div className={'form-submit-button'}>
            <Button type="submit" variant="outlined" startIcon={button.icon}>
                <Typography variant="body1" textTransform="uppercase">{button.text}</Typography>
            </Button>
        </div>
    </form>

    return Form
}