import {configureStore} from '@reduxjs/toolkit'
import { loadJobReducers } from './reducers/jobReducers';
import { loadJobTypeReducers } from './reducers/jobTypeReducers';
import { userReducers } from './reducers/userReducers';



const store = configureStore({
    reducer:{
        loadJobs: loadJobReducers,
        jobTypes: loadJobTypeReducers,
        user:userReducers,
    }
})

export default store;

export const server = 'http://localhost:8000/api/v1'