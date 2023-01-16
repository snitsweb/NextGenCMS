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
		}
	}
})

export const {setPages} = slice.actions
export default slice.reducer