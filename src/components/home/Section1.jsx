import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
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
}))

const Section1 = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.textWrapper} >
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
      </Box>
    </>
  )
}

export default Section1;