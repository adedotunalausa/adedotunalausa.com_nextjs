import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@material-ui/core';
import Navbar from '../components/Navbar'
import Section1 from '../components/home/Section1';
import { ThemeProvider } from '@material-ui/core/styles'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useStateValue } from '../context/StateProviders';
import { lightTheme, darkTheme } from '../theme';

// CSS Styles

const useStyles = makeStyles((theme) => ({
  body: {
    width: "100%",
    height: "100%",
    overflowX: "hidden",
    overflowY: "scroll"
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
  const [{ themeState }, dispatch] = useStateValue();

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getTheme = () => {
    if (typeof window === 'undefined') {
      return false
    }

    if (localStorage.getItem('myTheme')) {
      return JSON.parse(localStorage.getItem("myTheme"))
    }

    return themeState;
  }

  return (
    <ThemeProvider theme={getTheme() ? darkTheme : lightTheme}>
      <Box bgcolor="background.default" className={classes.body}>
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
    </ThemeProvider>

  )
}

export default Home;