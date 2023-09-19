import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { jobLoadAction } from '../redux/actions/jobAction'
import { useDispatch } from 'react-redux'

const Home = () => {
const dispatch = useDispatch();
  useEffect(() => {
   dispatch(jobLoadAction())
  }, [])
  
  return (
<>
<Navbar/>
<Header />
<div>Home</div>
</>
    
  )
}

export default Home