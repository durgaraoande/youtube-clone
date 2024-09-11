import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";
import configReducer from "./configSlice";
import chatReducer from "./chatSlice";
const appStore=configureStore({
    reducer:{
        video:videoReducer,
        config:configReducer,
        chat:chatReducer,
    }
})

export default appStore;