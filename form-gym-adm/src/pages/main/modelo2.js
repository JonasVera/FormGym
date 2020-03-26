import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
 import { styled } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import Person from '@material-ui/icons/PersonRounded';
import Assignment from '@material-ui/icons/Assignment';
import SportsMmaRounded from '@material-ui/icons/SportsMmaRounded';
import DirectionsRun from '@material-ui/icons/DirectionsRun';
import MenuIcon from '@material-ui/icons/DirectionsRun';
import Router from '../../Routes/router';
import {Link} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';

const drawerWidth = 240;
const AppBarStyle = styled(AppBar)({
  background: 'linear-gradient(45deg, #483D8B 30%, #836FFF 90%)',
  border: 0,
  color: 'white',
  height: 60,
  padding: '0 30px',
});

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  link:{
    textDecoration: 'none',
    display:'flex'
   
 
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
       <HashRouter>
    <div className={classes.root}>
      <CssBaseline />
      <AppBarStyle
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Form Gym
          </Typography>
        </Toolbar>
      </AppBarStyle>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <DirectionsRun /> : <DirectionsRun />}
          </IconButton>
        </div>
        <Divider />
        
           <List>
           
        
          <ListItem  button key={'Conta'}>
            <Link  className={classes.link} to="Conta">
               <ListItemIcon> <Person /></ListItemIcon>
                <ListItemText primary={'Conta'} />
             </Link>
          </ListItem>
            
          <ListItem  button key={'Exercicios'}>
            <Link   className={classes.link} to="Exercicios">
               <ListItemIcon> <FitnessCenter   /></ListItemIcon>
                <ListItemText primary={'Exercicios'} />
             </Link>
          </ListItem>

          <ListItem  button key={'Ficha'}>
            <Link   className={classes.link} to="/FormFicha">
               <ListItemIcon> <Assignment /></ListItemIcon>
                <ListItemText primary={'Ficha'} />
             </Link>
          </ListItem>
          <ListItem  button key={'Objetivos'}>
            <Link   className={classes.link} to="/Objetivo">
               <ListItemIcon> <SportsMmaRounded /></ListItemIcon>
                <ListItemText primary={'Objetivos'} />
             </Link>
          </ListItem>
        
    
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Router/>
          
      </main>
    </div>
  </HashRouter>
  );
}
