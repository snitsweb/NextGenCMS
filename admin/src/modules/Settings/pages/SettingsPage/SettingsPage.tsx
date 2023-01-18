import {config_themes_available} from '@modules/Settings/core/config'
import {setLayout} from '@modules/Settings/core/reducer'
import {useAppSelector} from 'hooks/redux/useAppSelector'
import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import s from './SettingsPage.module.scss'
import {BaseContainer} from '@common/components/BaseContainer/BaseContainer'
import BaseTab from '@common/components/BaseTab/BaseTab'
import BaseTabSection from '@common/components/BaseTabSection/BaseTabSection'
import BaseSelect from '@common/components/BaseSelect/BaseSelect'
import {BaseButton} from '@common/components/BaseButton/BaseButton'
import {ReactComponent as SaveIcon} from '@assets/svg/save.svg'
import {useBaseSelect} from 'hooks/UseBaseSelect'

const SettingsPage = () => {

	const settingsData = useAppSelector(state => state.settingsModule)

	const themeInput = {
		placeholder: 'Select your theme...',
		label: 'Theme:',
		variants: config_themes_available,
		defaultValue: {
			name: config_themes_available.find(theme => theme.value === settingsData.layout.alias)?.name || 'Default',
			value: config_themes_available.find(theme => theme.value === settingsData.layout.alias)?.value || 'default'
		}
	}

	const dispatch = useDispatch()
	const [themeInputValue, setThemeInputValue] = useBaseSelect(themeInput)
	const handleUpdateSettings = () => {
		window.app.nc.http.patch(`/page/${process.env.REACT_APP_PAGE_ID}`, {

		})

		dispatch(setLayout({
			alias: themeInputValue.value,
			id: settingsData.layout.id,
			is_template: settingsData.layout.is_template
		}))
	}

	useEffect(() => {
		const fetchPage = async () => {
			return await window.app.nc.http.get(`/page/${process.env.REACT_APP_PAGE_ID}`)
		}

		fetchPage().then((response) => {
			console.log(response.data)
		})
	}, [])

	return (
		<section className={s.settings}>
			<BaseContainer>
				<BaseTabSection>
					<BaseTab title={'appearance'} name={'Appearance'}>
						<BaseSelect input={themeInput}  onChange={setThemeInputValue} value={themeInputValue}/>
					</BaseTab>
					<BaseTab title={'social'} name={'Social'}>
						Social
					</BaseTab>
				</BaseTabSection>
			</BaseContainer>
			<div className="fixed-btn-wrapper">
				<BaseButton type={'primary'} icon={SaveIcon} onClick={handleUpdateSettings}>Save</BaseButton>
			</div>
		</section>
	)
}

export default SettingsPage