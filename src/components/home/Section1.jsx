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
  wrapperLight: {
    padding: "7.5rem 2rem",
    [theme.breakpoints.up('xs')]: {
      padding: "8.5rem 1.5rem",
    },
    [theme.breakpoints.up('sm')]: {
      padding: "8.5rem 2rem",
    },
    [theme.breakpoints.up('md')]: {
      padding: "8.5rem 5rem",
    },
  },
  // wrapperDark: {
  //   padding: "7.5rem 2rem",
  //   background: "#000000",
  //   [theme.breakpoints.up('sm')]: {
  //     padding: "8.5rem 2rem",
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     padding: "8.5rem 5rem",
  //   },
  // },
  smallText: {
    fontWeight: 400,
    lineHeight: "1.7rem",
    fontSize: "1rem"
  },
  bigText: {
    fontSize: "2rem",
    fontWeight: 300,
    margin: "0.5rem 0",
    [theme.breakpoints.up('md')]: {
      fontSize: "2.8rem"
    },
  },
  thickText: {
    fontSize: "1.6rem",
    fontWeight: 800,
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
      <Box className={classes.wrapperLight}>
        <Grid container>
          <Grid item item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Fade cascade ssrFadeout bottom>
              <Typography color="secondary" className={classes.smallText}>
                Hello, I'm Adedotun <span role="img" aria-label="wave">👋🏼</span>
              </Typography>
              <Typography color="primary" className={classes.bigText}
              >
                I build products
              </Typography>
              <Box color="movingText.main" className={classes.thickText}>
                <TextTransition
                  text={TEXTS[index % TEXTS.length]}
                  springConfig={presets.wobbly}
                  noOverflow={true}
                />
              </Box>
              <Box style={{ display: "flex", alignItems: "center" }}>
                <Typography color="secondary" className={classes.smallText}>
                  Brilliant and experienced software engineer helping startups
                  & Fortune 500 companies develop scalable software solutions.
                </Typography>
              </Box>
              <Box className={classes.buttonWrapper}>
                <FilledButton text="View my work" />
                <UnfilledButton text="More About Me" />
              </Box>
            </Fade>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            {
              isMobile &&
              <Fade ssrFadeout big>
                <img className={classes.image}
                  src="/images/Adedotun2.png"
                  alt="adedotun" />
              </Fade>
            }
            {
              isTabDesktop &&
              <Fade ssrFadeout big>
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