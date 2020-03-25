import React from 'react';
 
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import TabCadastro from './TabCadastro';
 
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  card:{
    maxWidth: '100%',
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
    fontSize: 15,
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

export default function FormGrpMuscular() {
  const classes = useStyles();
  const [musculo , setMusculo] = React.useState('');

  const handleChange = event => {
    setMusculo(event.target.value);
  };


   
  return (
      <>
    <Card className={classes.card} variant="outlined">
    <TabCadastro/>
       
    </Card>
    
    </>
  );
}