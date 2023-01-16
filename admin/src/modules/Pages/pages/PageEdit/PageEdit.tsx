import {config_page_statuses} from '@modules/Pages/core/config'
import {updatePage} from '@modules/Pages/core/reducer'
import {useAppSelector} from 'hooks/redux/useAppSelector'
import {useBaseTextInput} from 'hooks/useBaseTextInput'
import React from 'react'
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import s from './PageEdit.module.scss'
import {BaseContainer} from '@common/components/BaseContainer/BaseContainer'
import {BaseFont} from '@common/components/BaseFont/BaseFont'
import BaseSelect from '@common/components/BaseSelect/BaseSelect'
import BaseTextInput from '@common/components/BaseTextInput/BaseTextInput'
import {BaseButton} from '@common/components/BaseButton/BaseButton'
import {ReactComponent as SaveIcon} from '@assets/svg/save.svg'
import {useBaseSelect} from 'hooks/UseBaseSelect'

const PageEdit = () => {

	const {id = -999} = useParams()
	const page = useAppSelector(state => {
		return state.pagesModule.pages.find(page => page.id === +id)
	})
	if (!id || !page) return <BaseFont tag={'h1'}> There is no page with this id </BaseFont>

	const status_input = {
		placeholder: 'Select your variant',
		label: 'Status:',
		variants: config_page_statuses,
		defaultValue: {
			name: config_page_statuses.find(page_status => page_status.value === page.status)?.name || 'Published',
			value: config_page_statuses.find(page_status => page_status.value === page.status)?.value || 'published'
		}
	}
	const path_input = {
		placeholder: '/homepage',
		label: 'Path:',
		defaultValue: page?.path ? page.path : ''
	}
	const name_input = {
		placeholder: 'Home',
		label: 'Name:',
		defaultValue: page.name
	}

	const [statusInputValue, setStatusInputValue] = useBaseSelect(status_input)
	const [nameInputValue, setNameInputValue] = useBaseTextInput(name_input)
	const [pathInputValue, setPathInputValue] = useBaseTextInput(path_input)

	const dispatch = useDispatch()
	const handleUpdatePage = () => {
		dispatch(updatePage({
			id: page.id,
			status: statusInputValue.value,
			name: nameInputValue,
			path: pathInputValue,
			value: {}
		}))
	}

	return (
		<>
			<div className={s.page_edit}>
				<BaseContainer>
					<div className={s.page_edit_inner}>
						<BaseFont tag={'h1'}>Edit page</BaseFont>
						<div className={s.page_edit_form}>
							<BaseTextInput
								input={name_input}
								value={nameInputValue}
								onChange={(event) => setNameInputValue(event.target.value)}
							/>
							<BaseTextInput
								input={path_input}
								value={pathInputValue}
								onChange={(event) => setPathInputValue(event.target.value)}
							/>
							<BaseSelect
								input={status_input}
								value={statusInputValue}
								onChange={setStatusInputValue}
							/>
						</div>
					</div>
				</BaseContainer>
				<div className="fixed-btn-wrapper">
					<BaseButton type={'primary'} icon={SaveIcon} onClick={handleUpdatePage}>Save</BaseButton>
				</div>
			</div>
		</>
	)
}

export default PageEdit