import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@material-ui/core';
import Navbar from '../components/Navbar'
import Section1 from '../components/home/Section1';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// CSS Styles

const useStyles = makeStyles(() => ({
  body: {
    padding: "7.5rem 2rem"
  },
  background1: {
    position: "absolute",
    top: "8rem",
    width: "80%",
  },
  background2: {
    position: "absolute",
    top: "20rem",
    width: "80%",
  },
}))

const Home = () => {
  const classes = useStyles();

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <Box>
      <Navbar />
      <Box className={classes.body} >
        <img src="/assets/background1.svg"
          className={classes.background1}
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        />
        <img src="/assets/background1.svg"
          className={classes.background2}
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        />
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