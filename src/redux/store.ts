// Store is the redux bersion of state
import { configureStore } from "@reduxjs/toolkit";
import {reducer} from './slices/RootSlice'

export const store = configureStore({
    reducer,
    devTools: true
})