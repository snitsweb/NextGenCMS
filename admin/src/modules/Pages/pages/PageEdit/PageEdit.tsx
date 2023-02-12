import { BaseContainer } from '@common/components/BaseContainer/BaseContainer'
import s from '@modules/Pages/pages/PagesList/PageList.module.scss'
import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useSchemaForm } from '../../../../hooks/useSchemaForm'
import { pageSchema } from '@modules/Pages/utils/pageSchema'
import AddIcon from '@mui/icons-material/Add'
import { SchemaType } from '@common/types/Schema.type'

const PageEdit = () => {

    const {alias} = useParams()
    const onSubmit = (data: unknown) => console.log(data)

    const PageForm = useSchemaForm({
        schema: pageSchema as SchemaType,
        onSubmit: onSubmit,
        button: {
            text: 'Create',
            icon: <AddIcon />
        }
    })

    return <BaseContainer>
        <Typography className={s.page_list_title} variant="h2" color="text.primary" textTransform="uppercase" fontWeight="bold">
            Edit {alias}
        </Typography>
        <PageForm />
    </BaseContainer>
}

export default PageEdit
