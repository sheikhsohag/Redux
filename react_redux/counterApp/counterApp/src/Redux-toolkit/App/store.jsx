import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/Counter/counterSlice";
import counterReducer from "../features/Counter/counterSlice";
// import counterSlice from "../features/Counter/counterSlice"; this is actual name
// but since, counterslice is export as a default, thus, i can rename this..

const store = configureStore({
    reducer: {
        counter: counterReducer,

    }
})

export default store;