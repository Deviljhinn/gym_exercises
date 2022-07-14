import React from 'react'
//Typography is simply like a <p> element with additional styles
//Box is basically a div
//Idk what stack is i'll google later
//Button is button from html but here it has javascript properties
import { Box, Stack, Typography, Button } from '@mui/material';
//importing image, after going down and placing
//it, in the img src ref
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}
    }} position="relative" p="20px">
        <Typography color="#d92212"
        fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography color="#302625" bfontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px'}
        }}
        mb="23px" mt="30px"
        >
        Sweat, Smile <br /> And Repeat
        </Typography>
        <Typography fontSize="22px" 
        lineHeight="35px" mb={4}>
            Check out our most effective<br></br> exercises
        </Typography>
        <Button variant="contained"
        color="error" href="#exercises"
        sx={{ backgroundColor: '#awsfj2',
        padding: '10px' }}
        >Explore Exercises</Button>
        <Typography fontWeight={600}
        color="#ff2625"
        sx={{
            opacity: 0.1,
            display: { lg: 'block', xs: 'none'}
        }}
        fontSize="200px"
        >
            Exercise 
        </Typography>
        <img src={HeroBannerImage} alt="banner" 
        className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner