import { configureStore } from "@reduxjs/toolkit";
import  data  from "./data";
import auth from "./auth"


const store = configureStore({
    reducer:{
        data,
        auth
    }
})

export default store