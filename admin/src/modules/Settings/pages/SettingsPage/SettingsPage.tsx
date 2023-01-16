import {config_themes_available} from '@modules/Settings/core/config'
import {useAppSelector} from 'hooks/redux/useAppSelector'
import React from 'react'
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
			name: config_themes_available.find(theme => theme.value === settingsData.appearance.theme.alias)?.name || 'Default',
			value: config_themes_available.find(theme => theme.value === settingsData.appearance.theme.alias)?.value || 'default'
		}
	}

	const [value, setValue] = useBaseSelect(themeInput)

	return (
		<section className={s.settings}>
			<BaseContainer>
				<BaseTabSection>
					<BaseTab title={'appearance'} name={'Appearance'}>
						<BaseSelect input={themeInput}  onChange={setValue} value={value}/>
					</BaseTab>
					<BaseTab title={'social'} name={'Social'}>
						Social
					</BaseTab>
				</BaseTabSection>
			</BaseContainer>
			<div className="fixed-btn-wrapper">
				<BaseButton type={'primary'} icon={SaveIcon}>Save</BaseButton>
			</div>
		</section>
	)
}

export default SettingsPage