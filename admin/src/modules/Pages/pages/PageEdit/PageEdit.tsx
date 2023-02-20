import { BaseContainer } from '@common/components/BaseContainer/BaseContainer'
import s from '@modules/Pages/pages/PagesList/PageList.module.scss'
import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useSchemaForm } from '../../../../hooks/forms/useSchemaForm'
import { pageSchema } from '@modules/Pages/utils/pageSchema'
import AddIcon from '@mui/icons-material/Add'
import { SchemaType } from '@common/types/Schema.type'
import { PagesNetworkController } from '@modules/Pages/core/NetworkController'
import { useEffect, useState } from 'react'

const PageEdit = () => {

    const {alias} = useParams()
    if(!alias) return <div>No pages found with alias: {alias}</div>

    const [pageData, setPageData] = useState<SchemaType>(pageSchema)

    //TODO: refactoring
    useEffect(() => {
        PagesNetworkController.getPage(alias).then(res => {
            const newPageData = [...pageData]
            for (const [key, value] of Object.entries(res.data)) {
                const property = newPageData.find(el => el.attribute === key)
                if(!property) continue
                property.defaultValue = value as string
            }
            setPageData(newPageData)
        })
    }, [])
    const onSubmit = (data: any) => {
        PagesNetworkController.updatePage(alias, data).then(res => console.log(res))
    }

    const PageForm = useSchemaForm({
        schema: pageData,
        onSubmit: onSubmit,
        button: {
            text: 'Save',
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
