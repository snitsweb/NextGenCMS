import React from 'react'
import s from './SocialMediaSection.module.scss'
import BaseContainer from '../../components/atoms/BaseContainer/BaseContainer'
import BaseFont from '../../components/atoms/BaseFont/BaseFont'
import SocialMediaLinkPanel from './components/SocialMediaLinkPanel/SocialMediaLinkPanel'
const SocialMediaSection = ({value}) => {
	return (
		<section className={s.social_media_section}>
			<BaseContainer>
				<div className={s.social_media_section_inner}>
					<BaseFont tag={'h1'}>
						{value.header}
					</BaseFont>
					<div className={s.social_media_section_links}>
						<SocialMediaLinkPanel
							header={value.links[0].header}
							icon={value.links[0].icon}
							preview={value.links[0].preview}>
						</SocialMediaLinkPanel>
						<SocialMediaLinkPanel
							header={value.links[1].header}
							icon={value.links[1].icon}
							preview={value.links[1].preview}>
						</SocialMediaLinkPanel>
						<SocialMediaLinkPanel
							header={value.links[2].header}
							icon={value.links[2].icon}
							preview={value.links[2].preview}>
						</SocialMediaLinkPanel>
					</div>
				</div>
			</BaseContainer>
		</section>
	)
}

export default SocialMediaSection