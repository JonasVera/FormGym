import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CardObjetivo from './CardObjetivo';
import { styled } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    maxWidth: 850,
  },
  cardForm:{
    maxWidth:480,
  },
  textField:{
    marginLeft:10, 
    marginBottom:10,   
  },
  number:{
    marginLeft:10, 
    marginBottom:10,
    maxWidth:110,
  },MarginLeft:{
    marginLeft:10,
    marginBottom:10 
  }
  ,
  FormControl:{
   marginLeft:10, 
    marginBottom:10,   
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
  },
  pos: {
    marginBottom: 20,
  },
});
const AppBarStyle = styled(AppBar)({
  background: 'linear-gradient(45deg, #483D8B 30%, #836FFF 90%)',
  border: 0,
  color: 'white',
  height: 50,
  
});

const styles = {
  btnJns: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius : 3,
     color: 'white',
    height: 60,
    padding: '0 30px',
  },
};

export default function Objetivo() {
  const classes = useStyles();
   const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <Card className={classes.root}>
    <AppBarStyle position="static">
        <Toolbar>
            <Typography  >
           Objetivos
        </Typography>
        
        </Toolbar>
      </AppBarStyle>
      <CardContent>
        <Card className={classes.cardForm}variant="outlined">
            <CardContent>
              
        <Typography >
            Definir Objetivo
        </Typography>
            <Divider/>
      </CardContent>
        <Grid content>
            <Grid item>
                 <TextField className={classes.textField} size="small" label="Titulo" variant="outlined" />
                 <TextField className={classes.textField}  size="small" label="Descrição" variant="outlined" />
            </Grid>
             <Grid item  >
             <FormControl className={classes.FormControl} component="fieldset">
      <FormLabel component="legend">Objetivo</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value="top"
          control={<Radio color="primary" />}
          label="Perder Peso"
           
        />
        <FormControlLabel
          value="start"
          control={<Radio color="primary" />}
          label="Ganhar Peso"
         
        />
        <FormControlLabel
          value="bottom"
          control={<Radio color="primary" />}
          label="Definir"
       
        />
         
      </RadioGroup>
    </FormControl>
          
            </Grid>
            <Grid item xs={12} spacing={3}>
                 <TextField className={classes.textField} type="date"
                        type="date"
                         defaultValue="2020-03-24"
                size="small" label="Data Limite" variant="outlined" />
                 <TextField className={classes.number} type={'number'} size="small" label="Peso atual" variant="outlined" />
                 <TextField  className={classes.number} type={'number'} size="small" label="Peso meta" variant="outlined" />
            </Grid>
 
        </Grid>
      <CardActions>
            <Button className={classes.btnJns}  disableElevation>
                 Salvar
            </Button>
      </CardActions>
    </Card>
      </CardContent>
      <Grid  className={classes.MarginLeft} container spacing={1}>
        <Grid container item xs={12} spacing={3}>
              <CardObjetivo/>
              <CardObjetivo/>
              <CardObjetivo/>
              <CardObjetivo/>
              <CardObjetivo/>
              <CardObjetivo/>
              <CardObjetivo/>
        </Grid>
      </Grid>
      
    </Card>
  );
}
