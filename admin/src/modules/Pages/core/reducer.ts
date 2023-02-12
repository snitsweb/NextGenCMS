import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BaseResponse } from '@common/core/Interfaces/BaseResponse'

export interface Page extends BaseResponse {
  id: string;
  name: string;
  status: 'active' | 'inactive';
  path: string;
  value: object;
  title: string;
  description: string;
  alias: string;
}

export const slice = createSlice({
    name: 'photoStore',
    initialState: {
        pages: [] as Page[],
    },
    reducers: {
        setPages: (state, action: PayloadAction<Page[]>) => {
            state.pages = action.payload
        },
        updatePage: (state, action: PayloadAction<Page>) => {
            const index = state.pages.findIndex(
                (page) => action.payload.id === page.id
            )
            state.pages[index] = action.payload
        },
        deletePage: (state, action: PayloadAction<string>) => {
            state.pages = state.pages.filter((page) => page.id !== action.payload)
        },
        createPage: (state, action: PayloadAction<Page>) => {
            state.pages.push(action.payload)
        },
    },
})

export const { setPages, deletePage, updatePage, createPage } = slice.actions
export default slice.reducer
