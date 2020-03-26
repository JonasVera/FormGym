import React from 'react'; 
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import FormExercises from './FormExercises';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  card:{
    maxWidth: '70%',
    marginTop:10,
    marginBottom:10
  },

});

export default function FormGrpMuscular() {
  const classes = useStyles();
  
  return (
      <>
    <Card className={classes.card} variant="outlined">
    <FormExercises/>
       
    </Card>
    
    </>
  );
}