import { SchemaType } from '@common/types/Schema.type'
import { Controller, useForm } from 'react-hook-form'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { FC, ReactNode } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import { ContentState, convertFromHTML, convertToRaw, EditorState } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'


type keyObject = {
    [key: string]: string
}

interface IUsePageForm {
    schema: SchemaType,
    onSubmit: (data: unknown) => void,
    button: {
        icon: ReactNode,
        text: string
    }
}

const convertHTMLtoEditorState = (html: string) => {
    const blocksFromHTML = convertFromHTML(html)
    const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
    )
    return EditorState.createWithContent(state)
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
                        return <Controller
                            key={input.attribute}
                            name={input.attribute}
                            control={control}
                            render={({field}) => <TextField
                                {...field}
                                id={input.attribute}
                                label={input.label}
                                variant="outlined"
                                value={field.value || input.defaultValue}
                            />}
                        />
                    } else if (input.type === 'select_input') {
                        return <Controller
                            key={input.attribute}
                            name={input.attribute}
                            control={control}
                            render={({field}) => <FormControl>
                                <InputLabel id={input.attribute}>{input.label}</InputLabel>
                                <Select
                                    {...field}
                                    labelId={input.attribute}
                                    label={input.label}
                                    value={field.value || input.defaultValue}
                                >
                                    {
                                        input.options.map(option => <MenuItem key={option.value} value={option.value}>{option.name}</MenuItem>)
                                    }
                                </Select>
                            </FormControl>}
                        />
                    } else if (input.type === 'editor_input') {
                        return <div className="editor_input" key={input.attribute}>
                            <Typography color="text.primary" variant="body1">{input.label}:</Typography>
                            <Controller
                                key={input.attribute}
                                name={input.attribute}
                                control={control}
                                render={({field}) => <Editor

                                    defaultEditorState={convertHTMLtoEditorState(input.defaultValue || '')}
                                    onEditorStateChange={(value) => {
                                        field.onChange(value)
                                    }}
                                /> }
                            />
                        </div>
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