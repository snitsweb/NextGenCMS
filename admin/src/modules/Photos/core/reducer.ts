import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface Image {
	alt?: string,
	title?: string,
	path: string,
	name: string
}

export const slice = createSlice({
	name: 'photoStore',
	initialState: {
		photos: [
			{
				path: 'https://i.ibb.co/R3JhM0J/Group-1-min.jpg',
				name: 'Group-1'
			},
			{
				path: 'https://i.ibb.co/VDnKX0R/Group-3-min.jpg',
				name: 'Group-2'
			},
			{
				path: 'https://i.ibb.co/zrQR45k/Group-8-min.jpg',
				name: 'Group-3'
			},
			{
				path: 'https://i.ibb.co/9vqcJK3/Group-4-min.jpg',
				name: 'Group-4'
			},
			{
				path: 'https://i.ibb.co/KL295kL/Group-7-min.jpg',
				name: 'Group-5'
			},
			{
				path: 'https://i.ibb.co/c6Kpn9Z/Group-5-min.jpg',
				name: 'Group-6'
			},
			{
				path: 'https://i.ibb.co/vJzpDGF/Group-6-min.jpg',
				name: 'Group-7'
			}
		] as Image[]
	},
	reducers: {
		setPhotos: (state, action: PayloadAction<Image[]>) => {
			state.photos = action.payload
		}
	}
})

export const {setPhotos} = slice.actions
export default slice.reducer