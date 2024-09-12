import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        hamMenu:true,
        showDesc:false,
    },
    reducers:{
        toggleHamMenu:(state,action)=>{
            state.hamMenu=!state.hamMenu;
        },
        setHamMenu:(state,action)=>{
            state.hamMenu=action.payload;
        },
        setShowDesc:(state,action)=>{
            state.showDesc=action.payload;
        }
    }
})

export const {toggleHamMenu,setHamMenu,setShowDesc}=configSlice.actions;

export default configSlice.reducer;