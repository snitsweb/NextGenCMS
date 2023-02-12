export type SchemaType = InputType[]

export type InputType = SelectInputType | TextInputType

export type TextInputType = {
  type: 'text_input',
  attribute: string,
  label: string
  defaultValue?: string,
}

export type SelectInputType = {
  type: 'select_input',
  attribute: string,
  label: string
  defaultValue?: string,
  options: {
    name: string,
    value: string
  }[]
}