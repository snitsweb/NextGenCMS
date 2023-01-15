import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export const slice = createSlice({
	name: 'settingsStore',
	initialState: {
		appearance: {
			theme: {
				current: {
					name: 'Default',
					alias: 'default'
				},
				available: [
					{
						name: 'Default',
						alias: 'default'
					}
				]
			}
		}
	},
	reducers: {
		setSettings: (state, action: PayloadAction<Settings>) => {
			state = action.payload
		}
	}
})

export const {setSettings} = slice.actions
export default slice.reducer


interface Settings {
	appearance: {
		theme: {
			current: Theme,
			available: Theme[]
		}
	}
}

interface Theme {
	name: string
	alias: string
}