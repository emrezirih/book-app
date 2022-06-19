import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBook } from '../../models/book';

const initialList: IBook[] = [];

const bookSlice = createSlice({
    name: 'books',
    initialState: {
        list: initialList,
        sortBy: ""
    },
    reducers: {
        saveBookList(state, action: PayloadAction<IBook[]>) {
            state.list = action.payload;
        },
        changeSortBy(state, action: PayloadAction<string>) {
            state.sortBy = action.payload;
        },
    }
});

export const { saveBookList, changeSortBy } = bookSlice.actions;
export default bookSlice.reducer;