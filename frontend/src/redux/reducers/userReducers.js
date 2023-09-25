import { createReducer } from "@reduxjs/toolkit";

export const userReducers = createReducer({},{

//login User    
    loginRequest:(state)=>{
        state.loading= true;
    },
    loginSuccess:(state,action)=>{
        state.loading= false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
    },
    loginFail:(state,action)=>{
        state.loading= false;
        state.isAuthenticated = false;
        state.error= action.payload;
    },


//load User    
    loadUserRequest:(state)=>{
        state.loading= true;
    },
    loadUserSuccess:(state,action)=>{
        state.loading= false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
    },
    loadUserFail:(state,action)=>{
        state.loading= false;
        state.isAuthenticated = false;
        state.error= action.payload;
    },

//logout user 
    logoutRequest:(state)=>{
        state.loading= true;
    },
    logoutSuccess:(state,action)=>{
        state.loading= false;
        state.isAuthenticated = false;
        state.user = null;
        state.message = action.payload;
    },
    logoutFail:(state,action)=>{
        state.loading= false;
        state.isAuthenticated = true;
        state.error= action.payload;
    },
    
    clearErrors:(state)=>{
        state.error= null;
    },
    clearMessage:(state)=>{
        state.message= null;
    }
});

export const allUserReducers = createReducer({users:[]},{
    //all user
    allUserRequest:(state)=>{
        state.loading= true;
    },
    allUserSuccess:(state,action)=>{
        state.loading= false;
        state.users = action.payload.users;
    },
    allUserFail:(state,action)=>{
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