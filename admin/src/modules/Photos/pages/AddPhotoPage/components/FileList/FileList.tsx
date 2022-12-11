import type {FC} from 'react'
import {useMemo} from 'react'
import {BaseFont} from '@common/components/BaseFont/BaseFont'
import s from './Filelist.module.scss'

export interface IFileList {
	files: File[]
}

function list(files: File[]) {
	const label = (file: File) =>
		`'${file.name}' of size '${file.size}' and type '${file.type}'`
	return files.map((file) => <li key={file.name}>{label(file)}</li>)
}

export const FileList: FC<IFileList> = ({files}) => {
	if (files.length === 0) {
		return <BaseFont className={s.filelist_list} tag={'span'}>Nothing to display</BaseFont>
	}
	const fileList = useMemo(() => list(files), [files])
	return <div>{fileList}</div>
}
