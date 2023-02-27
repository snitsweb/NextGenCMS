import { Controller } from 'react-hook-form'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Control } from 'react-hook-form/dist/types/form'

export type useSelectInputType = {
  attribute: string
  control: Control
  label: string
  options: {
    name: string,
    value: any
  }[]
}

export const useSelectInput = ({attribute, control, label, options}: useSelectInputType) => {
    return <Controller
        key={attribute}
        name={attribute}
        control={control}
        render={({field}) => <FormControl>
            <InputLabel id={attribute}>{label}</InputLabel>
            <Select
                {...field}
                labelId={attribute}
                label={label}
                value={field.value}
            >
                {
                    options.map(option => <MenuItem key={option.value} value={option.value}>{option.name}</MenuItem>)
                }
            </Select>
        </FormControl>}
    />
}