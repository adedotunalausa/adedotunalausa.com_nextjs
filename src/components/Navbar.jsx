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
  Close,
} from '@material-ui/icons';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useRouter } from 'next/router';
import Hamburger from './Hamburger';
import { FilledButton } from './Button'

//CSS Styles

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX: "hidden",
    overflowY: "hidden",
  },
  appBar: {
    background: "#ffffff",
    maxWidth: "1440px",
    padding: "0.5rem 1rem",
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
  logoMobile: {
    width: "2rem",
    marginRight: "0.5rem"
  },
  logo: {
    width: "8rem"
  },
  links: {
    color: "#5B6E80",
    fontWeight: 400,
    lineHeight: "1.9rem",
    fontSize: "1rem",
    textTransform: "Capitalize",
    '& > *': {
      '&:hover': {
        color: "#0062FF"
      },
    },
    // [theme.breakpoints.up('sm')]: {
    //   fontSize: "0.5rem",
    // },
    [theme.breakpoints.up('md')]: {
      fontSize: "0.9rem",
    },
    // [theme.breakpoints.up('lg')]: {
    //   fontSize: "0.7rem",
    //   marginRight: "0.6rem",
    //   marginLeft: "0.6rem",
    // },
  },
}));

const header = () => {
  const router = useRouter()
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isTabDesktop = useMediaQuery(theme.breakpoints.up('sm'));

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
          <Toolbar>
            <div>
              {isMobile && (
                <Box className={classes.toolbar}>
                  <Box style={{ display: "flex", alignItems: "center" }}>
                    <img
                      onClick={() => handleMenuClick('/')}
                      className={classes.logoMobile}
                      src="/assets/adedotun_logo.svg"
                      alt="adedotun_logo"
                    />
                    <Typography style={{
                      color: "#0062FF",
                      fontWeight: 700, fontSize: "1.2rem"
                    }}>
                      Adedotun
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      edge="start"
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="menu"
                      onClick={toggleDrawer}>
                      <Hamburger open={toggle} />
                    </Button>
                    <Drawer anchor="right" open={toggle} onClose={toggleDrawer}>
                      <List
                        style={{ width: "100vw", padding: " 1rem 0.5rem" }}
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
                            onClick={() => handleMenuClick('/')}
                            className={classes.logoMobile}
                            src="/assets/adedotun_logo.svg"
                            alt="adedotun_logo"
                          />
                          <Close style={{ color: "#3A61E2", marginRight: "1rem" }} onClick={toggleDrawer} />
                        </Box>
                        <Box style={{ margin: "3rem auto", width: "11rem" }}>
                          <ListItem style={{ textAlign: "center" }} button>
                            <ListItemText>
                              <Typography className={classes.links}>Projects</Typography>
                            </ListItemText>
                          </ListItem>
                          <ListItem style={{ textAlign: "center" }} button>
                            <ListItemText>
                              <Typography className={classes.links}>Capabilities</Typography>
                            </ListItemText>
                          </ListItem>
                          <ListItem style={{ textAlign: "center" }} button>
                            <ListItemText>
                              <Typography style={{ color: "#0062FF" }} className={classes.links}>Contact</Typography>
                            </ListItemText>
                          </ListItem>
                          <ListItem style={{
                            marginTop: "1.5rem",
                            borderRadius: "0.5rem",
                            textAlign: "center",
                            background: "linear-gradient(120deg, #1a9bfc, #0062FF)",
                          }} button>
                            <ListItemText>
                              <Typography style={{ color: "#FFFFFF" }} className={classes.links}>Send a message</Typography>
                            </ListItemText>
                          </ListItem>
                        </Box>
                      </List>
                    </Drawer>
                  </Box>

                </Box>
              )
              }
              {isTabDesktop &&
                <Box className={classes.toolbar}>
                  <Box style={{ display: "flex", alignItems: "center" }}>
                    <img
                      onClick={() => handleMenuClick('/')}
                      className={classes.logoMobile}
                      src="/assets/adedotun_logo.svg"
                      alt="adedotun_logo"
                    />
                    <Typography style={{
                      color: "#0062FF",
                      fontWeight: 700, fontSize: "1.2rem"
                    }}>
                      Adedotun Alausa
                    </Typography>
                  </Box>
                  <Box>
                    <Button className={classes.links}>
                      Projects
                    </Button>
                    <Button className={classes.links}>
                      Capabilities
                    </Button>
                    <Button style={{ color: "#0062FF" }} className={classes.links}>
                      Contact
                    </Button>
                  </Box>
                </Box>
              }

            </div>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  )
}

export default header;
