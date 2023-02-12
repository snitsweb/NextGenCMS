import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'settingsStore',
    initialState: {} as Settings,
    reducers: {
        setSettings: (state, action: PayloadAction<Settings>) => {
            state.id = action.payload.id
            state.layout = action.payload.layout
            state.socials = action.payload.socials
        },
        setLayout: (state, action: PayloadAction<string>) => {
            state.layout.theme = action.payload
        },
        setSocials: (state, action: PayloadAction<Social[]>) => {
            state.socials = action.payload
        },
    },
})

export const { setSettings, setSocials, setLayout } = slice.actions
export default slice.reducer

export interface Settings {
	id: string;
	layout: Layout;
	socials: Social[];
}

interface Layout {
	theme: string;
}

interface Social {
	name: string,
	href: string,
}