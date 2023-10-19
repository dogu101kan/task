import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        token: null
    }
}

const auth = createSlice({
    name : "auth",
    initialState,
    reducers:{
        
        _removeAccount:(state, action)=>{
            state.currentAccount = null
        },
        _setCurrentAccount:(state, action)=>{
            state.currentAccount = action.payload
        }
    }
})

export const {
    _removeAccount,
    _setCurrentAccount
} = auth.actions

export default auth.reducer