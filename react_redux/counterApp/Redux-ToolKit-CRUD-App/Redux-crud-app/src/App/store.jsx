import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../fetaures/books/booksSlice";

const store = configureStore({
    reducer: {
        booksReducer: booksReducer,
    }
})

export default store;