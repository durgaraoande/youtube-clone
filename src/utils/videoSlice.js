import { createSlice } from "@reduxjs/toolkit";

const videoSlice=createSlice({
    name:"video",
    initialState:{
        video:null,
        currentVideo:null,
        channelDetails:null,
        comments:null,
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
        },
        setCurrentVideoComments:(state,action)=>{
            state.comments=action.payload;
        },
    }
})

export const {setVideo,setCurrentVideoData,setChannelDetails,setCurrentVideoComments}=videoSlice.actions;

export default videoSlice.reducer;