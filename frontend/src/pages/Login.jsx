import { Avatar, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'

import LockClockOutlined from '@mui/icons-material/LockClockOutlined'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux'
import { loginAction } from '../redux/actions/userAction'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './login.css'



const LogIn = ({isAuthenticated,loading}) => {

    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");

    const dispatch = useDispatch();
    
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(loginAction(email,password));
    }

    return (
        <>
            <Navbar />
            <Box sx={{ height: '90.7vh', display: "flex", alignItems: "center", justifyContent: "center" }}>

                   <form onSubmit={submitHandler} className="vg">
                    <Box 
                    sx={{ display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    width: "100%" }}
                    border={'1px solid #E6E6FA'}
                    p={10}
                    bgcolor={'#E6E6FA'}
                    color={"white"}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
                            <LockClockOutlined sx={{ color: 'white' }} />
                        </Avatar>
                        <TextField
                            sx={{
                                width:"20rem",
                                mb: 3,
                                fieldset: { borderColor: "rgb(231, 235, 240)" },
                            }}
                            fullWidth
                            id="email"
                            label="E-mail"
                            name='email'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder="Email"
                            InputLabelProps={{
                                shrink: true,
                            }}

                        />
                        <TextField
                            sx={{
                                mb: 3,
                                "& .MuiInputBase-root": {
                                    color: 'text.secondary'
                                },
                                fieldset: { borderColor: "rgb(231, 235, 240)" }
                            }}
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Password"
                        />

                        <Button disabled={loading} fullWidth variant="contained" type='submit' >Log In</Button>
                    </Box>
                    </form>
                </Box>
          
            <Footer />
        </>
    )
}

export default LogIn