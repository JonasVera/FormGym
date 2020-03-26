import React from 'react';
 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PreviewFicha from './PreviewFicha';
import { makeStyles } from '@material-ui/core/styles';

import CardDay from './CardDAy';
 // Escolher exercicio | dia | 3 x 12 | 
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  card:{
     
    marginTop:10,
    marginBottom:10
  },
  textField:{
   paddingTop:10 
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
    paddingBottom: 10,
    paddingTop: 10
  },
  pos: {
    marginBottom: 12,
  },
  formControl: {
    margin: 1,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: 2,
  },
});

export default function FormExercicio() {
  const classes = useStyles();
   
  return (
      <> 
       <CardDay/>
     
    <Card >
      <CardContent>
         
        <Typography className={classes.title} variant="h6" component="h6">
         Ficha de Treino
        </Typography>
         
         <Grid container
         spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="center">
        <Grid item >
        <PreviewFicha />  
     </Grid>
     
         
        </Grid>    
    
      </CardContent>
    </Card>
    </>
  );
}