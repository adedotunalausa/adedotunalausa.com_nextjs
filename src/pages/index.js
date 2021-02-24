import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Typography>
        Welcome, Adedotun!
    </Typography>
    </Box>

  )
}

export default Home;