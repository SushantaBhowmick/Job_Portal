import {configureStore} from '@reduxjs/toolkit'
import { loadJobReducers } from './reducers/jobReducers';



const store = configureStore({
    reducer:{
        loadJobs: loadJobReducers,
    }
})

export default store;

export const server = 'http://localhost:8000/api/v1'