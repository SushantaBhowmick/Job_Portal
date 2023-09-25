import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { jobDetailsAction } from '../redux/actions/jobAction';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardElement from '../components/CardElement';
import { Box, Typography } from '@mui/material';

const JobDetails = () => {
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(()=>{
        dispatch(jobDetailsAction(params.id))
    })
    const {job} =useSelector(state=>state.jobDetails)
    
  return (
    <div>
      <Navbar />
      <Box minHeight={"100vh"}>
                <Typography variant="h4" sx={{ color: "#fafafa" }}> Job Details</Typography>
                <Box>
               
                            {/* <CardElement
                               
                                id={job._id}
                                jobTitle={job.title}
                                description={job.description}
                                category=''
                                location={job.location}
                            />
                        */}
                </Box>
            </Box>
      <Footer />
    </div>
  )
}

export default JobDetails