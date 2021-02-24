import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Divider,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import {
  Menu,
  Close,
} from '@material-ui/icons';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useRouter } from 'next/router';
import Hamburger from './Hamburger';

//CSS Styles

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX: "hidden",
    overflowY: "hidden",
  },
  appBar: {
    background: "#ffffff",
    width: "100vw",
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "0.5rem",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.06), 0 -1px 0 0 rgba(0, 0, 0, 0.08)",
    [theme.breakpoints.up('md')]: {
      paddingRight: "3.5rem",
      paddingLeft: "3.5rem"
    },
    [theme.breakpoints.up('lg')]: {
      paddingRight: "5.5rem",
      paddingLeft: "5.5rem",
    }
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    width: "2rem",
    cursor: "pointer"
  },
  menuItems2: {
    '& > *': {
      '&:hover': {
        color: "#FF5C00"
      },
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: "0.5rem",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "0.6rem",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "0.7rem",
      marginRight: "0.6rem",
      marginLeft: "0.6rem",
    },
  },
  signUp: {
    '& > *': {
      '&:hover': {
        color: "#FF5C00",
      },
    },
    background: "#FF5C00",
    color: "#ffffff",
    [theme.breakpoints.up('sm')]: {
      fontSize: "0.5rem",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "0.6rem",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "0.7rem",
      marginRight: "0.6rem",
      marginLeft: "0.6rem",
    },
  }
}));

const menuItems2 = [
  {
    page: "ABOUT US",
    pageUrl: "/about"
  },
  {
    page: "STORIES",
    pageUrl: "/testimonial"
  },
  {
    page: "CONTACT",
    pageUrl: "/contact"
  },
  // {
  //   page: "LOGIN",
  //   pageUrl: "/login"
  // },
]
const signUp = [
  {
    page: "SIGN UP",
    pageUrl: "/signup"
  },
]

const header = () => {
  const router = useRouter()
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const [toggle, setToggle] = useState(false)

  const handleMenuClick = (pageUrl) => {
    router.push(pageUrl);
  };

  const toggleDrawer = () => {
    setToggle(!toggle);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <img
                onClick={() => handleMenuClick('/')}
                className={classes.title}
                src="adedotun_logo.svg"
                alt="adedotun_logo"
              />
              <Typography style={{
                color: "#0062FF",
                fontWeight: 700,
                fontSize: "1.1rem",
                marginLeft: "0.5rem"
              }}>Adedotun</Typography>
            </Box>
            <div>
              {isMobile ? (
                <Box>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer}>
                    <Hamburger open={toggle} />
                  </IconButton>
                  <Drawer anchor="right" open={toggle} onClose={toggleDrawer}>
                    <List
                      style={{ width: "100vw" }}
                      onClick={toggleDrawer}
                      onKeyDown={toggleDrawer}
                    >
                      <Box style={{
                        margin: "0.2rem 0.8rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}>
                        <img
                          style={{ marginLeft: "1rem" }}
                          className={classes.title}
                          onClick={() => handleMenuClick('/')}
                          src="/adedotun_logo.svg"
                          alt="adedotun-logo"
                        />
                        <Close style={{ color: "#3A61E2", marginRight: "1rem" }} onClick={toggleDrawer} />
                      </Box>
                      {menuItems2.map((text, index) => {
                        const { page, pageUrl } = text;
                        return (
                          <ListItem onClick={() => handleMenuClick(pageUrl)} button key={page}>
                            <ListItemText>
                              <Typography style={{ fontSize: "0.8rem" }}>{page}</Typography>
                            </ListItemText>
                          </ListItem>
                        )
                      })}
                    </List>
                  </Drawer>
                </Box>
              ) :
                <>
                  <Box>
                    {menuItems2.map((menuItem, key) => {
                      const { page, pageUrl } = menuItem;
                      return (
                        <Button className={classes.menuItems2} key={key} onClick={() => handleMenuClick(pageUrl)}>{page}</Button>
                      )
                    })}
                    {signUp.map((Item, key) => {
                      const { page, pageUrl } = Item;
                      return (
                        <Button className={classes.signUp} key={key} onClick={() => handleMenuClick(pageUrl)}>{page}</Button>
                      )
                    })}
                  </Box>
                </>
              }

            </div>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  )
}

export default header;
