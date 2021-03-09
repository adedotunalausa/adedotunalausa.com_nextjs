import React, { useState } from 'react'
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Close from '@material-ui/icons/Close';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useRouter } from 'next/router';

import Hamburger from './Hamburger';
import AppBar from './AppBar';
import { useStateValue } from '../context/StateProviders'

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
    marginRight: theme.spacing(0),
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
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
    fontWeight: 400,
    lineHeight: "1.9rem",
    fontSize: "1rem",
    textTransform: "Capitalize",
    padding: "0 1rem",
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

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#4a5568',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#EDEDED',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `none`,
    backgroundColor: "#EDEDED",
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const header = () => {
  const router = useRouter()
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isTabDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const [toggle, setToggle] = useState(false)
  const [{ themeState }, dispatch] = useStateValue();

  const handleChange = (event) => {
    dispatch({
      type: 'SET_THEME',
      value: event.target.checked
    })
    if (typeof window !== 'undefined') {
      localStorage.setItem('myTheme', event.target.checked)
    }
  };

  const getTheme = () => {
    if (typeof window === 'undefined') {
      return false
    }

    if (localStorage.getItem('myTheme')) {
      return JSON.parse(localStorage.getItem("myTheme"))
    }

    return themeState;
  }


  const handleMenuClick = (pageUrl) => {
    router.push(pageUrl);
  };

  const toggleDrawer = () => {
    setToggle(!toggle);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar getTheme={getTheme}>
          <div>
            {isMobile && (
              <Box className={classes.toolbar}>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <img
                    onClick={() => handleMenuClick('/')}
                    className={classes.logoMobile}
                    src={getTheme() ? "/assets/adedotun_logo_light.svg" : "/assets/adedotun_logo.svg"}
                    alt="adedotun_logo"
                  />
                  <Typography color="primary" style={{
                    fontWeight: 700, fontSize: "1.2rem"
                  }}>
                    Adedotun
                  </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <FormGroup style={{ marginLeft: "2rem" }}>
                    <FormControlLabel
                      control={<IOSSwitch checked={getTheme()} onChange={handleChange} name="checkedA" />}
                      label={getTheme() ? <Brightness2Icon color='primary' style={{ marginTop: "0.4rem", width: "1rem" }} />
                        : <WbSunnyIcon color="secondary" style={{ marginTop: "0.4rem", width: "1rem" }} />}
                    />
                  </FormGroup>
                  <Box aria-label="menu">
                    <Hamburger onClick={toggleDrawer} open={toggle} />
                  </Box>
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
                      <Box style={{ margin: "3rem auto", width: "12.5rem" }}>
                        <ListItem style={{ textAlign: "center" }} button>
                          <ListItemText>
                            <Typography color="secondary" className={classes.links}>Projects</Typography>
                          </ListItemText>
                        </ListItem>
                        <ListItem style={{ textAlign: "center" }} button>
                          <ListItemText>
                            <Typography color="secondary" className={classes.links}>Capabilities</Typography>
                          </ListItemText>
                        </ListItem>
                        <ListItem style={{ textAlign: "center" }} button>
                          <ListItemText>
                            <Typography color="primary" className={classes.links}>Contact</Typography>
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
                    src={getTheme() ? "/assets/adedotun_logo_light.svg" : "/assets/adedotun_logo.svg"}
                    alt="adedotun_logo"
                  />
                  <Typography color="primary" style={{ fontWeight: 700, fontSize: "1.2rem" }}>
                    Adedotun Alausa
                  </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Button color="secondary" className={classes.links}>
                    Projects
                  </Button>
                  <Button color="secondary" className={classes.links}>
                    Capabilities
                  </Button>
                  <Button color="primary" className={classes.links}>
                    Contact
                  </Button>
                </Box>
                <FormGroup>
                  <FormControlLabel
                    control={<IOSSwitch checked={getTheme()} onChange={handleChange} name="checkedA" />}
                    label={getTheme() ? <Brightness2Icon color="primary" style={{ marginTop: "0.4rem", width: "1rem" }} />
                      : <WbSunnyIcon color="secondary" style={{ marginTop: "0.4rem", width: "1rem" }} />}
                  />
                </FormGroup>
              </Box>
            }

          </div>
        </AppBar>
      </div>
    </React.Fragment>
  )
}

export default header;
