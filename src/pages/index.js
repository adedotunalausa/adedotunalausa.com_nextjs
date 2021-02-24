import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Navbar from '../components/Navbar'
import Section1 from '../components/home/Section1';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// CSS Styles

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: "7.5rem"
  }
}))

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} >
      <Navbar />
      <Section1 />
    </Box>

  )
}

export default Home;