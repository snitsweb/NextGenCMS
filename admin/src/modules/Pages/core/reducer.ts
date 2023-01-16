import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface Page {
	id: number
	name: string,
	status: string,
	path: string,
	value: object
}

export const slice = createSlice({
	name: 'photoStore',
	initialState: {
		pages: [
			{
				id: 1,
				name: 'Home',
				status: 'active',
				path: '/',
				value: {}
			},
			{
				id: 2,
				name: 'About',
				status: 'active',
				path: '/about',
				value: {}
			},
			{
				id: 3,
				name: 'Contact',
				status: 'active',
				path: '/contact',
				value: {}
			}
		] as Page[]
	},
	reducers: {
		setPages: (state, action: PayloadAction<Page[]>) => {
			state.pages = action.payload
		},
		updatePage: (state, action: PayloadAction<Page>) => {
			const index = state.pages.findIndex((page) => action.payload.id === page.id)
			state.pages[index] = action.payload
		},
		deletePage: (state, action: PayloadAction<number>) => {
			state.pages = state.pages.filter((page) => page.id !== action.payload)
		},
		createPage: (state, action: PayloadAction<Page>) => {
			state.pages.push(action.payload)
		}
	}
})

export const {setPages, deletePage, updatePage, createPage} = slice.actions
export default slice.reducer