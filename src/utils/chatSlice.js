import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHART_COUNT } from "./constants";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[],
    },
    reducers:{
        setMessages:(state,action)=>{
            state.messages.splice(LIVE_CHART_COUNT,1)
            state.messages.unshift(action.payload)
        }
    }
})

export const {setMessages} =chatSlice.actions;
export default chatSlice.reducer;