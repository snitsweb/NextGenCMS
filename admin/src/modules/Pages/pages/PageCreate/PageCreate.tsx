import { Typography } from '@mui/material'
import { BaseContainer } from '@common/components/BaseContainer/BaseContainer'
import AddIcon from '@mui/icons-material/Add'
import s from '@modules/Pages/pages/PagesList/PageList.module.scss'
import { useSchemaForm } from '@modules/Pages/hooks/useSchemaForm'
import { config_page_statuses } from '@modules/Pages/core/config'

const PageCreate = () => {

    const pageFormSchema = [
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

    const onSubmit = data => console.log(data)

    const TestForm = useSchemaForm({
        schema: pageFormSchema,
        onSubmit: onSubmit,
        button: {
            text: 'Create',
            icon: <AddIcon />
        }
    })


    return <BaseContainer>
        <Typography
            className={s.page_list_title}
            variant="h2"
            color="text.primary"
            textTransform="uppercase"
            fontWeight="bold"
        >
            Create page
        </Typography>
        <TestForm />
    </BaseContainer>
}

export default PageCreate
