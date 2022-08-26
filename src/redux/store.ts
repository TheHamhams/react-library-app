// Store is the redux bersion of state
import { configureStore } from "@reduxjs/toolkit";
// import {reducer} from './slices/RootSlice'
import { reducer } from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        user: reducer
    }
})