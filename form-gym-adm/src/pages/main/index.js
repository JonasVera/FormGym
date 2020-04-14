import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FitnessCenter from "@material-ui/icons/FitnessCenter";
import Person from "@material-ui/icons/PersonRounded";
import Assignment from "@material-ui/icons/Assignment";
import SportsMmaRounded from "@material-ui/icons/SportsMmaRounded";
import MenuIcon from "@material-ui/icons/DirectionsRun";
import Router from "../../Routes/router";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { HashRouter } from "react-router-dom";
const drawerWidth = 180;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
    display: "flex",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

export default function Main() {
  const classes = useStyles();
  const userName = localStorage.getItem("user");
  return (
    <HashRouter>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <Button
                startIcon={<MenuIcon />}
                className={classes.button}
                color="inherit"
              >
                Login
              </Button>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Form Gym {userName}
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />

          <List>
            <ListItem button key={"Conta"}>
              <Link className={classes.link} to="Conta">
                <ListItemIcon>
                  {" "}
                  <Person />
                </ListItemIcon>
                <ListItemText primary={"Conta"} />
              </Link>
            </ListItem>

            <ListItem button key={"Exercicios"}>
              <Link className={classes.link} to="Exercicios">
                <ListItemIcon>
                  {" "}
                  <FitnessCenter />
                </ListItemIcon>
                <ListItemText primary={"Exercicios"} />
              </Link>
            </ListItem>

            <ListItem button key={"Ficha"}>
              <Link className={classes.link} to="/FormFicha">
                <ListItemIcon>
                  {" "}
                  <Assignment />
                </ListItemIcon>
                <ListItemText primary={"Ficha"} />
              </Link>
            </ListItem>
            <ListItem button key={"Objetivos"}>
              <Link className={classes.link} to="/Objetivo">
                <ListItemIcon>
                  {" "}
                  <SportsMmaRounded />
                </ListItemIcon>
                <ListItemText primary={"Objetivos"} />
              </Link>
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Router />
        </main>
      </div>
    </HashRouter>
  );
}
