import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button1: {
    width: "9rem",
    background: "linear-gradient(120deg, #1a9bfc, #0062FF)",
    padding: "0.8rem 0",
    borderRadius: "0.5rem",
    marginRight: "1rem",
    fontSize: "1rem",
    boxShadow: "0 5px 10px 0 rgba(0, 98, 255, 0.06), 0 -5px 10px 0 rgba(0, 98, 255, 0.06)",
  },
  button2: {
    width: "7rem",
    background: "#FFFFFF",
    padding: "0.8rem 0",
    fontSize: "1rem",
    borderRadius: "0.5rem",
    // boxShadow: "0 5px 10px 0 rgba(0, 98, 255, 0.06), 0 -5px 10px 0 rgba(0, 98, 255, 0.06)",
  },
}))

export const FilledButton = ({ text }) => {
  const classes = useStyles()

  return (
    <>
      <Button className={classes.button1}>
        <Typography className={classes.smallText} style={{
          color: "#FFFFFF",
          fontWeight: 600,
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
          fontWeight: 600,
          fontSize: "0.9rem",
          textTransform: "capitalize"
        }}>
          {text}
        </Typography>
      </Button>
    </>
  )
}