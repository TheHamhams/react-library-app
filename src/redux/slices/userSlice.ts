import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    id: '',
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    user_token: ''
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