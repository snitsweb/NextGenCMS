import React from 'react'
import s from './SocialMediaLinkPanel.module.scss'
import BaseFont from '../../../../components/atoms/BaseFont/BaseFont'
import BaseContainer from '../../../../components/atoms/BaseContainer/BaseContainer'
const SocialMediaLinkPanel = ({header, icon, preview}) => {
	return (
		<BaseContainer>
			<div className={s.social_media_link_panel}>
				<div className={s.social_media_link_panel_text}>
					<img className={s.social_media_link_panel_icon}
						 src={icon}
						 alt={'icon'}
						 title={'icon'}/>
					<BaseFont tag={'h3'} className={s.social_media_link_panel_header}>
						{header}
					</BaseFont>
				</div>
				<img className={s.social_media_link_panel_preview}
					 src={preview}
					 alt={'preview'}
					 title={'preview'}/>
			</div>
		</BaseContainer>
	)
}

export default SocialMediaLinkPanel