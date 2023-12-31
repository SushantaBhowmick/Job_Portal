import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const NotFound = () => {
    return (
        <>
            <Navbar />
            <Box sx={{ height: '90.7vh', display: "flex", alignItems: "center", justifyContent: "center" }}>

                <h1>Page not found!</h1>
            </Box>
            <Footer />
        </>
    )
}

export default NotFound