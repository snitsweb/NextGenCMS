import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface Image {
	id: number
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
				id: 1,
				path: 'https://i.ibb.co/R3JhM0J/Group-1-min.jpg',
				name: 'Group-1'
			},
			{
				id: 2,
				path: 'https://i.ibb.co/VDnKX0R/Group-3-min.jpg',
				name: 'Group-2'
			},
			{
				id: 3,
				path: 'https://i.ibb.co/zrQR45k/Group-8-min.jpg',
				name: 'Group-3'
			},
			{
				id: 4,
				path: 'https://i.ibb.co/9vqcJK3/Group-4-min.jpg',
				name: 'Group-4'
			},
			{
				id: 5,
				path: 'https://i.ibb.co/KL295kL/Group-7-min.jpg',
				name: 'Group-5'
			},
			{
				id: 6,
				path: 'https://i.ibb.co/c6Kpn9Z/Group-5-min.jpg',
				name: 'Group-6'
			},
			{
				id: 7,
				path: 'https://i.ibb.co/vJzpDGF/Group-6-min.jpg',
				name: 'Group-7'
			}
		] as Image[]
	},
	reducers: {
		setPhotos: (state, action: PayloadAction<Image[]>) => {
			state.photos = action.payload
		},
		deletePhoto: (state, action: PayloadAction<number>) => {
			state.photos = state.photos.filter(photo => photo.id !== action.payload)
		}
	}
})

export const {setPhotos, deletePhoto} = slice.actions
export default slice.reducer