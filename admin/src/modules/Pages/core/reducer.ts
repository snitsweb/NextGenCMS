import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface Page {
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
				name: 'Home',
				status: 'active',
				path: '/',
				value: {}
			},
			{
				name: 'About',
				status: 'active',
				path: '/about',
				value: {}
			},
			{
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