import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export const slice = createSlice({
	name: 'settingsStore',
	initialState: {
		appearance: {
			theme: {
				name: 'Default',
				alias: 'default'
			}
		}
	},
	reducers: {
		setSettings: (state, action: PayloadAction<Settings>) => {
			state = action.payload
		},
		setTheme: (state, action: PayloadAction<Theme>) => {
			state.appearance.theme = action.payload
		}
	}
})

export const {setSettings, setTheme} = slice.actions
export default slice.reducer

interface Settings {
	appearance: {
		theme: Theme
	}
}

interface Theme {
	name: string
	alias: string
}