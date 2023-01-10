import React from 'react'
import s from './SettingsPage.module.scss'
import {BaseContainer} from '@common/components/BaseContainer/BaseContainer'
import BaseTab from '@common/components/BaseTab/BaseTab'
import BaseTabSection from '@common/components/BaseTabSection/BaseTabSection'
import BaseSelect from '@common/components/BaseSelect/BaseSelect'
import {BaseButton} from '@common/components/BaseButton/BaseButton'
import {ReactComponent as SaveIcon} from '@assets/svg/save.svg'

const SettingsPage = () => {

	const themeInput = {
		placeholder: 'Select your theme...',
		label: 'Theme:',
		variants: [
			{
				name: 'Default',
				value: 'default'
			},
			{
				name: 'Dark',
				value: 'dark'
			}
		],
		defaultValue: {
			name: 'Default',
			value: 'default'
		}
	}

	return (
		<section className={s.settings}>
			<BaseContainer>
				<BaseTabSection>
					<BaseTab title={'appearance'} name={'Appearance'}>
						<BaseSelect input={themeInput} />
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