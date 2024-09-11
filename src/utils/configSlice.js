import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        hamMenu:true,
    },
    reducers:{
        toggleHamMenu:(state,action)=>{
            state.hamMenu=!state.hamMenu;
        },
        setHamMenu:(state,action)=>{
            state.hamMenu=action.payload;
        }
    }
})

export const {toggleHamMenu,setHamMenu}=configSlice.actions;

export default configSlice.reducer;