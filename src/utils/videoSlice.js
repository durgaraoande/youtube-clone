import { createSlice } from "@reduxjs/toolkit";

const videoSlice=createSlice({
    name:"video",
    initialState:{
        video:null,
        currentVideo:null,
        channelDetails:null
    },
    reducers:{
        setVideo:(state,action)=>{
            state.video=action.payload;
        },
        setCurrentVideoData:(state,action)=>{
            state.currentVideo=action.payload;
        },
        setChannelDetails:(state,action)=>{
            state.channelDetails=action.payload;
        }
    }
})

export const {setVideo,setCurrentVideoData,setChannelDetails}=videoSlice.actions;

export default videoSlice.reducer;