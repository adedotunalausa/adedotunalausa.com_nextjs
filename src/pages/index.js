import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Navbar from '../components/Navbar'
import Section1 from '../components/home/Section1';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// CSS Styles

const useStyles = makeStyles(() => ({
  body: {
    padding: "7.5rem 2rem"
  },
  background: {
    position: "absolute",
    top: "7rem",
    width: "80%",
    // height: "100vh"
  }
}))

const Home = () => {
  const classes = useStyles();

  return (
    <Box>
      <Navbar />
      <Box className={classes.body} >
        <img src="/assets/background1.svg" className={classes.background} />
        {/* <img src="/assets/background2.svg" className={classes.background} /> */}
        {/* <img src="/assets/circle-process-2.svg" className={classes.background} /> */}
        <Box style={{ zIndex: 10 }}>
          <Section1 />
        </Box>
      </Box>
    </Box>

  )
}

export default Home;