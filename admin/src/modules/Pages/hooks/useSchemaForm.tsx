import { SchemaType } from '@common/types/Schema.type'
import { Controller, useForm } from 'react-hook-form'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { FC, ReactNode } from 'react'

type keyObject = {
    [key: string]: string
}

interface IUsePageForm {
    schema: SchemaType,
    onSubmit: (data: any) => void,
    button: {
        icon: ReactNode,
        text: string
    }
}
export const useSchemaForm = ({schema, onSubmit, button }: IUsePageForm): FC  => {

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