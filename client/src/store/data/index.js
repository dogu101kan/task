import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  accounts: null,
  scriptResult: null,
};

const data = createSlice({
  name: "data",
  initialState,
  reducers: {
    
    _setData: (state, action) => {
      state.scriptResult = action.payload;
    },
    _setAccounts:(state, action) =>{
      state.accounts = action.payload;
    },
    _removeData: (state, action) => {
      state.scriptResult = null;
    },
  },
});

export const { _setData, _removeData, _setAccounts } = data.actions;

export default data.reducer;
