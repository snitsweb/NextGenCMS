import { Typography } from '@mui/material'
import { BaseContainer } from '@common/components/BaseContainer/BaseContainer'
import AddIcon from '@mui/icons-material/Add'
import s from '@modules/Pages/pages/PagesList/PageList.module.scss'
import { useSchemaForm } from '../../../../hooks/forms/useSchemaForm'
import { pageSchema } from '@modules/Pages/utils/pageSchema'
import { SchemaType } from '@common/types/Schema.type'
import {PagesNetworkController} from "@modules/Pages/core/NetworkController";

const PageCreate = () => {



    const onSubmit = (data: any) => {
        PagesNetworkController.createPage( data).then(res => console.log(res))
    }

    const PageForm = useSchemaForm({
        schema: pageSchema as SchemaType,
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
        <PageForm />
    </BaseContainer>
}

export default PageCreate
