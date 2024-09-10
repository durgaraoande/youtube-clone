import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";
const appStore=configureStore({
    reducer:{
        video:videoReducer,
    }
})

export default appStore;