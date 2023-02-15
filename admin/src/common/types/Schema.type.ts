export type SchemaType = InputType[]

export type InputType = SelectInputType | TextInputType | EditorInputType | PasswordInputType

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

export type EditorInputType = {
  type: 'editor_input',
  attribute: string,
  label: string,
  defaultValue?: string
}


export type PasswordInputType = {
  type: 'password_input',
  attribute: string,
  label: string
  defaultValue?: string,
}