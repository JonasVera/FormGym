import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import StepDias from './StepDias';
import ListDay from './ListDay';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PreViewFicha from './PreviewFicha';
const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    marginBottom:10,
    
  
  },
  textField:{
    marginTop:10,
    marginLeft:0,
    paddingLeft:2,
    width:111
     
 
  },
  PreViewFicha:{
    marginTop:20,
  },
  listExercises:{
    
    marginRight:0,
    paddingLeft:2,
    paddingRight:2,
    width:111  
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
   
  formControl: {
    marginTop:10,
    marginLeft:5,
    minWidth: 208,
  },
  selectEmpty: {
    marginTop: 5  ,
  },  
});
const AppBarStyle = styled(AppBar)({
  background: 'linear-gradient(45deg, #483D8B 30%, #836FFF 90%)',
  border: 0,
  color: 'white',
  height: 50,
  
});
export default function CardDay() {
  const [musculo , setMusculo] = React.useState('');

  const handleChange = event => {
    setMusculo(event.target.value);
  };


  const classes = useStyles();
 

  return (
    <>
    
    <Card className={classes.root}   >
    <AppBarStyle position="static">
        <Toolbar>
           <Typography  >
            Criar ficha de Treino
          </Typography>
        
        </Toolbar>
      </AppBarStyle>
      <CardContent>
          
      <TextField fullWidth={'10%'} size="small" id="outlined-basic" label="Nome da ficha" variant="outlined" />
            
          <StepDias/>
  
          
        <Grid container
         spacing={2}
            direction="row"
            >  
           <Grid item spacing={2}>
                <FormControl size="small" variant="outlined" className={classes.textField} id className={classes.formControl}>
                <InputLabel size="small" id="demo-simple-select-outlined-label">Musculo</InputLabel>
                     <Select 
                        labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                           value={musculo}
                           onChange={handleChange}
                             label="Musculo"
                             size="small"
                        > 
                           <MenuItem value={10}>1</MenuItem>
                           <MenuItem value={20}>2</MenuItem>
                           <MenuItem value={30}>3</MenuItem>
                     </Select>
                     <Grid>
                     <TextField size="small" type='number' className={classes.textField} id="outlined-basic" label="Serie" variant="outlined" />
                     <TextField size="small" type='number' className={classes.textField} id="outlined-basic" label="Repetição" variant="outlined" />
                      <ListDay className={classes.listExercises}/>
                      <Button fullWidth={'100%'} variant="contained" color="primary">
                       Adicionar na ficha
                      </Button>
                </Grid>
              </FormControl>
              
            </Grid>
             <Grid>
              <PreViewFicha  className={classes.PreViewFicha}/>  
            </Grid>
      </Grid>

      </CardContent>
        
      <CardActions>
     
      </CardActions>
    </Card>
    </>
  );
}