import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button1: {
    background: "#FFFFFF",
    padding: "0.8rem 1rem",
    borderRadius: "2rem",
    boxShadow: "0 5px 10px 0 rgba(0, 98, 255, 0.06), 0 -5px 10px 0 rgba(0, 98, 255, 0.06)",
  },
  button2: {
    padding: "0.8rem 1rem",
    borderRadius: "2rem",
  },
}))

export const FilledButton = ({ text }) => {
  const classes = useStyles()

  return (
    <>
      <Button className={classes.button1}>
        <Typography className={classes.smallText} style={{
          color: "#0062FF",
          fontWeight: 700,
          fontSize: "0.9rem",
          textTransform: "capitalize"
        }}>
          {text}
        </Typography>
      </Button>
    </>
  )
}

export const UnfilledButton = ({ text }) => {
  const classes = useStyles();

  return (
    <>
      <Button className={classes.button2}>
        <Typography className={classes.smallText} style={{
          color: "#0062FF",
          fontWeight: 700,
          fontSize: "0.9rem",
          textTransform: "capitalize"
        }}>
          {text}
        </Typography>
      </Button>
    </>
  )
}