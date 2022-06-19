import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './store/books';


export const store = configureStore({
    reducer: {
        books: bookReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;