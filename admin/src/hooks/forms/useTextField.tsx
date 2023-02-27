import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import { Control } from 'react-hook-form/dist/types/form'

export type useTextFieldType = {
  attribute: string
  label: string
  control: Control,
  type?: string
}

export const useTextField = ({attribute, label, control, type}: useTextFieldType) => {
    return <Controller
        key={attribute}
        name={attribute}
        control={control}
        render={({field}) => <TextField
            {...field}
            id={attribute}
            label={label}
            variant="outlined"
            value={field.value}
            type={type || 'text'}
        />}
    />
}