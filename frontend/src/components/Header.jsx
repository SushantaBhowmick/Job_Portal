import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
import headerImage from "../images/jobbg.jpg"

const Header = () => {

    const StyleHeader = styled(Box)(({theme})=>({
        display:"flex",
        minHeight:400,
        justifyContent:'center',
        backgroundImage:`url(${headerImage})`,
        marginTop:"50px",
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundColor:theme.palette.secondary.main, 
    }))

  return (
    <>
    <StyleHeader>

    </StyleHeader>
    </>
  )
}

export default Header