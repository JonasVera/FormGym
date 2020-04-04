import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
   
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
         
        <Typography variant="h5" component="h2"> 
          Olá bem vindo ao Form Gym 
        </Typography>
         
         
      </CardContent>
      
    </Card>
  );
}
