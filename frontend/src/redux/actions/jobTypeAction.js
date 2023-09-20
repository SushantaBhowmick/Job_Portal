import { server } from "../store";
import axios from 'axios'

export const jobTypeLoadAction = ()=> async(dispatch)=>{
    dispatch({type:"loadJobTypeRequest"})

    try {
        const {data} = await axios.get(`${server}/type/jobs`)
        dispatch({
            type:"loadJobTypeSuccess",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:"loadJobTypeFail",
            payload:error.response.data.message
        })
    }
}