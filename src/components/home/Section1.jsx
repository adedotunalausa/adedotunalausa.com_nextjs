import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { FilledButton, UnfilledButton } from '../Button';

const useStyles = makeStyles((theme) => ({
  textWrapper: {
    textAlign: "center"
  },
  smallText: {
    color: "#5B6E80",
    fontWeight: 500,
    lineHeight: "1.9rem",
  },
  bigText: {
    fontSize: "2rem",
    fontWeight: 700,
    fontFamily: "Open Sans",
    color: "#00083D",
    margin: "1rem 0"
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 2.5rem",
    margin: "3rem 0"
  },
  image: {
    width: "22rem"
  }
}))

const Section1 = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.textWrapper} >
        <Grid container>
          <Grid item item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography className={classes.smallText}>
              Hello, I'm Adedotun <span role="img" aria-label="wave">👋🏼</span>
            </Typography>
            <Typography className={classes.bigText}>
              Software Engineer
            </Typography>
            <Typography className={classes.smallText} style={{ padding: "0 1rem" }}>
              I build digital products that meets the expectations of
              users, help businesses reach their goals and result
              in an awesome user interaction
            </Typography>
            <Box className={classes.buttonWrapper}>
              <FilledButton text="View my work" />
              <UnfilledButton text="More about me" />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <img className={classes.image}
              src="/images/Adedotun2.png"
              alt="adedotun" />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Section1;