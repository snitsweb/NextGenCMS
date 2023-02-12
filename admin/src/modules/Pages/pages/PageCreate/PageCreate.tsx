import { Typography } from '@mui/material'
import { BaseContainer } from '@common/components/BaseContainer/BaseContainer'
import AddIcon from '@mui/icons-material/Add'
import s from '@modules/Pages/pages/PagesList/PageList.module.scss'
import { usePageForm } from '@modules/Pages/hooks/usePageForm'

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
        }
    ]

    const onSubmit = data => console.log(data)

    const TestForm = usePageForm({
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
