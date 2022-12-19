import React from 'react'
import s from './SettingsPage.module.scss'
import {BaseContainer} from '@common/components/BaseContainer/BaseContainer'
import BaseTab from '@common/components/BaseTab/BaseTab'
import BaseTabSection from '@common/components/BaseTabSection/BaseTabSection'
import BaseSelect from '@common/components/BaseSelect/BaseSelect'

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
		</section>
	)
}

export default SettingsPage