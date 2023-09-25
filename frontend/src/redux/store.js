import {configureStore} from '@reduxjs/toolkit'
import { loadJobDetailsReducers, loadJobReducers } from './reducers/jobReducers';
import { loadJobTypeReducers } from './reducers/jobTypeReducers';
import { allUserReducers, userReducers } from './reducers/userReducers';



const store = configureStore({
    reducer:{
        loadJobs: loadJobReducers,
        jobTypes: loadJobTypeReducers,
        user:userReducers,
        allUsers:allUserReducers,
        jobDetails:loadJobDetailsReducers
    }
})

export default store;

export const server = 'http://localhost:8000/api/v1'