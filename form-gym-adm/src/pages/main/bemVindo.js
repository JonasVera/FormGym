import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function BemVindo() {
  const classes = useStyles();
  const userName = localStorage.getItem("user");
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        const userName = localStorage.getItem("user");
        <Typography variant="h5" component="h2">
          Olá bem vindo ao Form Gym {userName}
        </Typography>
      </CardContent>
    </Card>
  );
}
