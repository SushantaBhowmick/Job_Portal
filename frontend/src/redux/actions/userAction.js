import { server } from "../store";
import axios from 'axios'

export const loginAction = (email,password)=> async(dispatch)=>{

    try {
    dispatch({type:"loginRequest"})
        const {data} = await axios.post(`${server}/signin`,
        {email,password}, {
            headers: {
                 'Content-Type': 'application/json',
                 },
            withCredentials: true,
        })
        dispatch({
            type:"loginSuccess",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:"loginFail",
            payload:error.response.data.message
        })
    }
}

export const logoutAction = ()=> async(dispatch)=>{

    try {
    dispatch({type:"logoutRequest"})
        const {data} = await axios.get(`${server}/logout`,
         {
            withCredentials: true,
        })
        dispatch({
            type:"logoutSuccess",
            payload:data.message
        })
    } catch (error) {
        dispatch({
            type:"logoutFail",
            payload:error.response.data.message
        })
    }
}

export const loadUserAction = ()=> async(dispatch)=>{

    try {
    dispatch({type:"loadUserRequest"})
        const {data} = await axios.get(`${server}/me`,
         {
            withCredentials: true,
        })
        dispatch({
            type:"loadUserSuccess",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:"loadUserFail",
            payload:error.response.data.message
        })
    }
}