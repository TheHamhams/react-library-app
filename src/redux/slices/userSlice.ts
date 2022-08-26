import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            email: 'Email',
            first_name: 'First Name',
            last_name: 'Last Name',
            password: 'Password',
            logged_in: false
        }
    },
    reducers:{
        login: (state,action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = {
            email: 'Email',
            first_name: 'First Name',
            last_name: 'Last Name',
            password: 'Password',
            logged_in: false
            }
        },
        tryEmail: (state, action) => {state.user.email = action.payload},
        tryPassword: (state, action) => {state.user.password = action.payload}
    },

})

export const reducer = userSlice.reducer

export const selectUser = (state:any) => state.user.user

export const {login, logout, tryEmail, tryPassword} = userSlice.actions