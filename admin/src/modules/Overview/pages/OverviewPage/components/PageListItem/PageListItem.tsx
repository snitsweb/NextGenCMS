import {deletePage, Page} from '@modules/Pages/core/reducer'
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import s from './PageListItem.module.scss'
import {BaseFont} from '@common/components/BaseFont/BaseFont'
import {NavLink} from 'react-router-dom'
import {ReactComponent as EditIcon} from '../../../../../../assets/svg/edit.svg'
import {ReactComponent as DeleteIcon} from '../../../../../../assets/svg/delete.svg'
import {BaseButton} from '@common/components/BaseButton/BaseButton'

interface IPageListItem {
	page: Page
}
const PageListItem: React.FC<IPageListItem> = ({page}) => {

	const [isDeletePopupShown, setIsDeletePopupShown] = useState<boolean>(false)
	const dispatch = useDispatch()

	const togglePopupHandler = () => {
		setIsDeletePopupShown(prevState => !prevState)
	}

	const deleteHandler = () => {
		dispatch(deletePage(page.id))
		togglePopupHandler()
		alert('Deleted!')
	}

	return (
		<div className={s.page_list_item}>
			<div>
				{page.name}
			</div>
			<div>
				{page.status}
			</div>
			<div>
				{page.path}
			</div>
			<div className={s.page_list_item_actions}>
				<NavLink className={`${s.page_list_item_action} ${s.page_list_item_action_edit}`} to={`/pages/edit/${page.id}`}>
					<EditIcon/>
					<BaseFont tag={'span'} color={'white'} weight={700}>Edit</BaseFont>
				</NavLink>
				<div
					className={`${s.page_list_item_action}  ${s.page_list_item_action_delete}`}
					onClick={() => togglePopupHandler()}
				>
					<DeleteIcon/>
					<BaseFont tag={'span'} color={'white'} weight={700}>Delete</BaseFont>
				</div>
			</div>
			<div className={`${s.delete_popup} ${isDeletePopupShown ? s.delete_popup_active : ''}`}>
				<BaseFont tag={'h2'}>Are you sure?</BaseFont>
				<div className={s.delete_popup_buttons}>
					<BaseButton
						onClick={() => deleteHandler()}
						icon={DeleteIcon}
						iconFill={'white'}
						type={'danger'}
					>
						Delete
					</BaseButton>
					<BaseButton
						type={'bordered'}
						onClick={() => togglePopupHandler()}
					>
						Cancel
					</BaseButton>
				</div>
			</div>
		</div>
	)
}

export default PageListItem