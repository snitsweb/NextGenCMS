import React from 'react'
import s from './PageListItem.module.scss'
import { NavLink } from 'react-router-dom'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { Button, Typography } from '@mui/material'
import { Page } from '@modules/Pages/core/reducer'

interface IPageListItem {
	page: Page;
}

const PageListItem: React.FC<IPageListItem> = ({ page }) => {

    return (
        <div className={s.page_list_item}>
            <div>
                <Typography variant="body2" color="text.primary">{page.name}</Typography>
            </div>
            <div>
                <Typography variant="body2" color="text.primary">{page.status}</Typography>
            </div>
            <div>
                <Typography variant="body2" color="text.primary">{page.path}</Typography>
            </div>
            <div className={s.page_list_item_actions}>
                <NavLink className={`${s.page_list_item_action} ${s.page_list_item_action_edit}`} to={`/pages/edit/${page.alias}`}>
                    <Button variant="outlined" startIcon={<EditOutlinedIcon color="primary" />} size="medium">
                        <Typography variant="body2" color="text.primary">
							Edit
                        </Typography>
                    </Button>
                </NavLink>
                <div
                    className={`${s.page_list_item_action}  ${s.page_list_item_action_delete}`}
                    onClick={() => console.log('delete clicked')}
                >
                    <Button
                        variant="outlined"
                        color="warning"
                        startIcon={<DeleteOutlineOutlinedIcon color="error" />}
                        size="medium"
                    >
                        <Typography variant="body2" color="text.primary">
													Delete
                        </Typography>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PageListItem