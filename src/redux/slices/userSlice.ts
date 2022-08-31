import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    token: '',
    logged_in: false
}

const userSlice = createSlice({
    name: 'user',
    initialState: { initialStateValue },

    reducers:{
        login: (state,action) => {
            state = action.payload
        },
        logout: (state) => { 
            state = { initialStateValue }
        }
    }
})

export const reducer = userSlice.reducer


export const {login, logout} = userSlice.actions