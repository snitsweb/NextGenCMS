import {useEffect, useState} from 'react'

export interface IPageListItem {
	name: string,
	status: string,
	path: string
}
export const useFetchPages = () => {
	const [pages, setPages] = useState<IPageListItem[] | []>([])

	useEffect(() => {
		const pagesData = [
			{
				name: 'Home',
				status: 'active',
				path: '/'
			},
			{
				name: 'About',
				status: 'active',
				path: '/about'
			},
			{
				name: 'Contact',
				status: 'active',
				path: '/contact'
			}
		]
		setPages(pagesData)
	}, [])
	return pages
}