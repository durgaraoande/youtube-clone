import { createSlice } from "@reduxjs/toolkit";

const videoSlice=createSlice({
    name:"video",
    initialState:{
        video:null
    },
    reducers:{
        setVideo:(state,action)=>{
            state.video=action.payload;
        }
    }
})

export const {setVideo}=videoSlice.actions;

export default videoSlice.reducer;