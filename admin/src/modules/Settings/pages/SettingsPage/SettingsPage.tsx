import { config_themes_available } from '@modules/Settings/core/config'
import { setLayout, setSettings, Settings } from '@modules/Settings/core/reducer'
import { useAppSelector } from 'hooks/redux/useAppSelector'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import s from './SettingsPage.module.scss'
import { BaseContainer } from '@common/components/BaseContainer/BaseContainer'
import BaseTab from '@common/components/BaseTab/BaseTab'
import BaseTabSection from '@common/components/BaseTabSection/BaseTabSection'
import BaseSelect from '@common/components/BaseSelect/BaseSelect'
import { BaseButton } from '@common/components/BaseButton/BaseButton'
import { ReactComponent as SaveIcon } from '@assets/svg/save.svg'
import { useBaseSelect } from 'hooks/UseBaseSelect'
import { BaseFont } from '@common/components/BaseFont/BaseFont'

const SettingsPage = () => {

	const settingsData = useAppSelector(state => state.settingsModule)
	const dispatch = useDispatch()

	const [isPageLoading, setIsPageLoading] = useState(true)

	const themeInput = {
		placeholder: 'Select your theme...',
		label: 'Theme:',
		variants: config_themes_available,
		defaultValue: {
			name: config_themes_available.find(theme => theme.value === settingsData.layout?.theme)?.name || 'Default',
			value: config_themes_available.find(theme => theme.value === settingsData.layout?.theme)?.value || 'theme-default',
		},
	}
	const [themeInputValue, setThemeInputValue] = useBaseSelect(themeInput)

	useEffect(() => {
		const fetchSettings = async () => {
			return await window.app.nc.http.get<Settings[]>('settings')
		}

		fetchSettings().then((response) => {
			const settings = response.data[0]
			dispatch(setSettings({
				id: settings.id,
				layout: {
					theme: settings.layout.theme,
				},
				socials: settings.socials.map(social => {
					return {
						name: social.name,
						href: social.href,
					}
				}),
			}))
			setIsPageLoading(false)
		})
	}, [])

	useEffect(() => {
		setThemeInputValue({
			value: config_themes_available.find(theme => theme.value === settingsData.layout?.theme)?.value || 'theme-default',
			name: config_themes_available.find(theme => theme.value === settingsData.layout?.theme)?.name || 'Default',
		})
	}, [isPageLoading])
	const handleUpdateSettings = () => {
		window.app.nc.http.patch<Settings>(`/settings/${settingsData.id}`, {
			layout: {
				theme: themeInputValue,
			},
		})
		dispatch(setLayout(themeInputValue.value))
	}

	return (
		<section className={s.settings}>
			<BaseContainer>
				{
					isPageLoading
						? <BaseFont tag={'h4'}>Page is loading...</BaseFont>
						: <>

							<BaseTabSection>
								<BaseTab title={'appearance'} name={'Appearance'}>
									<BaseSelect input={themeInput} onChange={setThemeInputValue} value={themeInputValue} />
								</BaseTab>
								<BaseTab title={'social'} name={'Social'}>
									Social
								</BaseTab>
							</BaseTabSection>

							<div className='fixed-btn-wrapper'>
								<BaseButton type={'primary'} icon={SaveIcon} onClick={handleUpdateSettings}>Save</BaseButton>
							</div>
						</>
				}
			</BaseContainer>


		</section>
	)
}

export default SettingsPage