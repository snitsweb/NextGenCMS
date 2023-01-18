import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export const slice = createSlice({
	name: 'settingsStore',
	initialState: {
		layout: {
			alias: 'theme-default',
			id: 1,
			is_template: 0
		},
		meta: {
			author: 'Oleksandr Snitsaruk',
			domain: 'zespolowe.snitsweb.me',
			id: 1,
			mail: 'oleksnitsaruk@gmail.com',
			name: 'Oleksandr Snitsaruk',
			page: 1
		},
		socials: [
			{
				alias: 'instagram',
				id: 1,
				value: {
					link: 'https://www.instagram.com/_snitsaruk/'
				}
			}
		]
	},
	reducers: {
		setSettings: (state, action: PayloadAction<Settings>) => {
			state = action.payload
		},
		setMeta: (state, action: PayloadAction<Meta>) => {
			state.meta = action.payload
		},
		setLayout: (state, action: PayloadAction<Layout>) => {
			state.layout = action.payload
		},
		setSocials: (state, action: PayloadAction<Social[]>) => {
			state.socials = action.payload
		}
	}
})

export const {setSettings, setMeta, setSocials, setLayout} = slice.actions
export default slice.reducer

interface Settings {
	layout: Layout
	meta: Meta,
	socials: Social[]
}

interface Layout {
	alias: string,
		id: number,
	is_template: number
}

interface Meta {
	author: string,
	domain: string,
	id: number,
	mail: string,
	name: string,
	page: number
}

interface Social {
	alias: string,
	id: number,
	value: {
		link: string
	}
}