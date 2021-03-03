import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { FilledButton, UnfilledButton } from '../Button';
// import ScrollReveal from 'scrollreveal';
import { useSpring, animated } from 'react-spring'
import TextTransition, { presets } from "react-text-transition";
import Fade from 'react-reveal/Fade';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    // padding: "0 2rem 0 2rem"
  },
  smallText: {
    color: "#5B6E80",
    fontWeight: 400,
    lineHeight: "1.7rem",
    fontSize: "1rem"
  },
  bigText: {
    fontSize: "2rem",
    fontWeight: 300,
    color: "#0062FF",
    margin: "0.5rem 0",
    [theme.breakpoints.up('md')]: {
      fontSize: "2.8rem"
    },
  },
  thickText: {
    fontSize: "1.6rem",
    fontWeight: 800,
    color: "#00083D",
    margin: "0 0 2rem 0",
    [theme.breakpoints.up('md')]: {
      fontSize: "3rem"
    },
  },
  buttonWrapper: {
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "center",
    width: "19rem",
    margin: "3rem 0"
  },
  image: {
    width: "20rem",
    [theme.breakpoints.up('md')]: {
      marginLeft: "4rem"
    },
  }
}))

const TEXTS = [
  "to expedite processes",
  "that is scalable",
  "to solve problems",
  "people love to use"
];

const Section1 = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isTabDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <Box className={classes.wrapper} >
        <Grid container>
          <Grid item item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Fade ssrFadeout bottom>
              <Typography className={classes.smallText}>
                Hello, I'm Adedotun <span role="img" aria-label="wave">👋🏼</span>
              </Typography>
            </Fade>
            <Fade ssrFadeout bottom>
              <Typography className={classes.bigText}>
                I build products
              </Typography>
            </Fade>
            <Fade ssrFadeout bottom>
              <Box className={classes.thickText}>
                <TextTransition
                  text={TEXTS[index % TEXTS.length]}
                  springConfig={presets.wobbly}
                  noOverflow={true}
                />
              </Box>
            </Fade>
            <Box style={{ display: "flex", alignItems: "center" }}>
              {/* <span style={{ width: "4rem", height: "100%", backgroundColor: "#0062FF" }}></span> */}
              <Fade ssrFadeout bottom>
                <Typography className={classes.smallText}>
                  Brilliant and experienced software engineer helping startups
                  & Fortune 500 companies develop scalable software solutions.
                </Typography>
              </Fade>
            </Box>
            <Fade ssrFadeout bottom>
              <Box className={classes.buttonWrapper}>
                <FilledButton text="View my work" />
                <UnfilledButton text="More About Me" />
              </Box>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            {
              isMobile &&
              <Fade ssrFadeout bottom>
                <img className={classes.image}
                  src="/images/Adedotun2.png"
                  alt="adedotun" />
              </Fade>
            }
            {
              isTabDesktop &&
              <Fade ssrFadeout bottom>
                <img className={classes.image}
                  src="/images/Adedotun11.png"
                  alt="adedotun" />
              </Fade>
            }
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Section1;