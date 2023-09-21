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

const App = () => {

  const dispatch = useDispatch();
  const {user,isAuthenticated,message,error} = useSelector(state=>state.user)

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
  
  return (
    <>
    <Router>
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/search/location/:location' element={<Home />} />
     <Route path='/search/:keyword' element={<Home />} />
     <Route path='login' element={<LogIn isAuthenticated={isAuthenticated}/>} />
     <Route path='profile' element={<Profile />} />

     <Route path='*' element={<NotFound />} />
    </Routes>
    <ToastContainer/>
    </Router>
    </>
  )
}

export default App