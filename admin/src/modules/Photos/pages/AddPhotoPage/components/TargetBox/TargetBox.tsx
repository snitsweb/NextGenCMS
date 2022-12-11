import type {DropTargetMonitor} from 'react-dnd'
import {useDrop} from 'react-dnd'
import {NativeTypes} from 'react-dnd-html5-backend'
import React from 'react'
import s from './TargetBox.module.scss'
import {BaseFont} from '@common/components/BaseFont/BaseFont'

interface ITargetBox {
	onDrop: (item: { files: any[] }) => void
}

export const TargetBox: React.FC<ITargetBox> = ({onDrop}) => {

	const [{canDrop, isOver}, drop] = useDrop(
		() => ({
			accept: [NativeTypes.FILE],
			drop(item: { files: any[] }) {
				if (onDrop) {
					onDrop(item)
				}
			},
			canDrop(item: any) {
				console.log('canDrop', item.files, item.items)
				return true
			},
			hover(item: any) {
				console.log('hover', item.files, item.items)
			},
			collect: (monitor: DropTargetMonitor) => {
				const item = monitor.getItem() as any
				if (item) {
					console.log('collect', item.files, item.items)
				}

				return {
					isOver: monitor.isOver(),
					canDrop: monitor.canDrop()
				}
			}
		}),
		[onDrop]
	)

	const isActive = canDrop && isOver

	return (
		<div ref={drop} className={s.target_box}>
			<BaseFont tag={'span'}>{isActive ? 'Release to drop' : 'Drag file here'}</BaseFont>
		</div>
	)
}