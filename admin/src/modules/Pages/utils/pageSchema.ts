import { config_page_statuses } from '@modules/Pages/core/config'
import { SchemaType } from '@common/types/Schema.type'

export const pageSchema = [
    {
        type: 'text_input',
        attribute: 'path',
        label: 'Path',
        defaultValue: '/'
    },
    {
        type: 'text_input',
        attribute: 'name',
        label: 'Name',
        defaultValue: 'Home'
    },
    {
        type: 'text_input',
        attribute: 'alias',
        label: 'Alias',
        defaultValue: 'homepage'
    },
    {
        type: 'text_input',
        attribute: 'title',
        label: 'Title',
        defaultValue: 'Snitsweb - homepage'
    },
    {
        type: 'select_input',
        attribute: 'status',
        label: 'Status',
        options: config_page_statuses,
        defaultValue: config_page_statuses[0].value
    },
    {
        type: 'editor_input',
        attribute: 'description',
        label: 'Description',
        defaultValue: '<p>Description of your page here...</p>'
    }
] as SchemaType