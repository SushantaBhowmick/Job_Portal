import { createReducer } from "@reduxjs/toolkit";

export const loadJobTypeReducers = createReducer({jobType:[]},{
    loadJobTypeRequest:(state)=>{
        state.loading= true;
    },
    loadJobTypeSuccess:(state,action)=>{
        state.loading= false;
        state.jobType = action.payload.jobT;
    },
    loadJobTypeFail:(state,action)=>{
        state.loading= false;
        state.error= action.payload;
    },
    
    clearErrors:(state)=>{
        state.error= null;
    },
    clearMessage:(state)=>{
        state.message= null;
    }
})