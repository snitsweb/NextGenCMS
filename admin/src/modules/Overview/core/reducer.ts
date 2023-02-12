import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IGeneralStore {
	data: object
}
export const slice = createSlice({
    name: 'generalStore',
    initialState: {
        data: {} as IGeneralStore
    },
    reducers: {
        setData: (state, action: PayloadAction<IGeneralStore>) => {
            state.data = action.payload
        }
    }
})

export const {setData} = slice.actions

export default slice.reducer