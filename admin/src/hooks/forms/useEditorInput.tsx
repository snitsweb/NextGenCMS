import { Typography } from '@mui/material'
import { Controller } from 'react-hook-form'
import { Editor } from 'react-draft-wysiwyg'
import { Control } from 'react-hook-form/dist/types/form'
import { ContentState, convertFromHTML, EditorState } from 'draft-js'

export type useEditorInputType = {
  attribute: string
  label: string
  control: Control
  defaultValue: string | undefined
}

const convertHTMLtoEditorState = (html: string) => {
    const blocksFromHTML = convertFromHTML(html)
    const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
    )
    return EditorState.createWithContent(state)
}

export const useEditorInput = ({attribute, label, control, defaultValue}: useEditorInputType) => {
    return <div className="editor_input" key={attribute}>
        <Typography color="text.primary" variant="body1">{label}:</Typography>
        <Controller
            key={attribute}
            name={attribute}
            control={control}
            render={({field}) => <Editor
                toolbarClassName={window.app.theme.palette.mode}
                defaultEditorState={convertHTMLtoEditorState(defaultValue || '')}
                onEditorStateChange={(value) => {
                    field.onChange(value)
                }}
            /> }
        />
    </div>
}