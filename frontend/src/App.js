import React, { useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import LogIn from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { loadUserAction } from './redux/actions/userAction'
import 'react-toastify/dist/ReactToastify.css'
import Profile from './pages/user/Profile'
import UserDashboard from './pages/user/userDashboard'
import {ProtectedRoute} from 'protected-route-react'
import Layout from './pages/global/Layout'
import UserJobsHistory from './pages/user/UserJobHistory'
import { CssBaseline } from '@mui/material'
import DashUsers from './pages/admin/DashUsers'
import JobDetails from './pages/JobDetails'

const App = () => {

  const dispatch = useDispatch();
  const {user,isAuthenticated,message,error,loading} = useSelector(state=>state.user)

  useEffect(()=>{
    if(error){
      toast.error(error)
      dispatch({type:"clearErrors"})
    }
    if(message){
      toast.success(message);
      dispatch({type:"clearMessage"})
    }
  })

  useEffect(() => {
   dispatch(loadUserAction())
  }, [dispatch])

  //HOC
  const UserDashboardHOC = Layout(UserDashboard);
const UserJobsHistoryHOC = Layout(UserJobsHistory);
const UserInfoDashboardHOC = Layout(Profile);
// const AdminDashboardHOC = Layout(AdminDashboard);
const DashUsersHOC = Layout(DashUsers);
// const DashJobsHOC = Layout(DashJobs);
  
  return (
    <>
   <CssBaseline />
    <Router>
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/search/location/:location' element={<Home />} />
     <Route path='/search/:keyword' element={<Home />} />

     <Route path='login' element={<ProtectedRoute
      isAuthenticated={!isAuthenticated} redirect='/user/dashboard'>
      <LogIn loading={loading}/>
     </ProtectedRoute>} />

     <Route path='job/:id' element={
      <JobDetails />
    } />

     <Route path='user/info' element={<ProtectedRoute isAuthenticated={isAuthenticated} >
      <UserInfoDashboardHOC />
     </ProtectedRoute>} />

     <Route path='user/jobs' element={<ProtectedRoute isAuthenticated={isAuthenticated} >
      <UserJobsHistoryHOC />
     </ProtectedRoute>} />
     
     <Route path='user/dashboard' element={<ProtectedRoute 
     isAuthenticated={isAuthenticated} >
      <UserDashboardHOC />
     </ProtectedRoute>} />

     <Route path='/admin/users' element={<ProtectedRoute isAuthenticated={isAuthenticated}><DashUsersHOC /></ProtectedRoute>} />


     <Route path='*' element={<NotFound />} />
    </Routes>
    <ToastContainer/>
    </Router>
    </>
  )
}

export default App