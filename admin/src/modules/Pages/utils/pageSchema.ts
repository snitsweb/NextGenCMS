import { config_page_statuses } from '@modules/Pages/core/config'

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
    }
]