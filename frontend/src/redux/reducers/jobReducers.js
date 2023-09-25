import { createReducer } from "@reduxjs/toolkit";

export const loadJobReducers = createReducer({jobs:[]},{
    loadJobRequest:(state)=>{
        state.loading= true;
    },
    loadJobSuccess:(state,action)=>{
        state.loading= false;
        state.success = action.payload.success;
        state.jobs = action.payload.jobs;
        state.count = action.payload.count;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.setUniqueLocation = action.payload.setUniqueLocation;
    },
    loadJobFail:(state,action)=>{
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

export const loadJobDetailsReducers = createReducer({job:{}},{
    loadJobDetailsRequest:(state)=>{
        state.loading= true;
    },
    loadJobDetailsSuccess:(state,action)=>{
        state.loading= false;
        state.success = action.payload.success;
        state.job = action.payload.job;
    },
    loadJobDetailsFail:(state,action)=>{
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