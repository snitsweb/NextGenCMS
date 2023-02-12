import { SchemaType } from '@common/types/Schema.type'
import { Controller, useForm } from 'react-hook-form'
import { Button, TextField, Typography } from '@mui/material'
import { FC, ReactNode } from 'react'

type keyObject = {
    [key: string]: string
}

interface IUsePageForm {
    schema: SchemaType,
    onSubmit: (data) => void,
    button: {
        icon: ReactNode,
        text: string
    }
}
export const usePageForm = ({schema, onSubmit, button }: IUsePageForm): FC  => {

    const defaultValues: keyObject = {}
    schema.forEach(input => {
        defaultValues[input.attribute as keyof typeof defaultValues] = input.defaultValue as string
    })

    const { control, handleSubmit } = useForm({
        defaultValues: defaultValues
    })

    const Form = () => <form onSubmit={handleSubmit(onSubmit)}>
        <div>
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
                    }
                })
            }
        </div>
        <div>
            <Button type="submit" variant="outlined" startIcon={button.icon}>
                <Typography variant="body1" textTransform="uppercase">{button.text}</Typography>
            </Button>
        </div>
    </form>

    return Form
}