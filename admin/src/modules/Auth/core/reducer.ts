import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'photoStore',
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload
        }
    },
})

export const { setIsLoggedIn } = slice.actions
export default slice.reducer
