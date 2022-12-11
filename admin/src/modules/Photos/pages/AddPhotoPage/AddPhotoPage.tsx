import React, {useCallback, useState} from 'react'
import s from './AddPhotoPage.module.scss'
import {BaseContainer} from 'common/components/BaseContainer/BaseContainer'
import {BaseFont} from 'common/components/BaseFont/BaseFont'
import {BaseButton} from 'common/components/BaseButton/BaseButton'
import {NavLink} from 'react-router-dom'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {TargetBox} from './components/TargetBox/TargetBox'
import {FileList} from './components/FileList/FileList'
import {ReactComponent as BackIcon} from '../../../../assets/svg/back-arrow.svg'

export const AddPhotoPage: React.FC = () => {

	const [droppedFiles, setDroppedFiles] = useState<File[]>([])

	const handleFileDrop = useCallback(
		(item: { files: any[] }) => {
			if (item) {
				const files = item.files
				setDroppedFiles(files)
			}
		},
		[setDroppedFiles]
	)

	return (
		<>
			<div className={s.add_photo_page}>
				<BaseContainer>
					<div className={s.add_photo_page_inner}>
						<BaseFont tag={'h1'}>Add Photo</BaseFont>

						<DndProvider backend={HTML5Backend}>
							<TargetBox onDrop={handleFileDrop}/>
							<FileList files={droppedFiles}/>
						</DndProvider>

						<NavLink to="/photos">
							<BaseButton className={s.add_photo_page_button} icon={BackIcon}>Back to photos</BaseButton>
						</NavLink>
					</div>
				</BaseContainer>
			</div>
		</>
	)
}