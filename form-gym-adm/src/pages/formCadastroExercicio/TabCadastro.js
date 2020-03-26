import React,{useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
 
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import api from '../../services/api';
import CardInfo from './CardInfo';
  
function TabPanel(props) {
  const useStyles = makeStyles(theme => ({
    
    card:{
      minWidth:200,
      width:'50%',  
      marginLeft:20,
    },
    textField:{
      padding:8,
      marginTop:10,
      minWidth:500
    } 
  }));
  
  const { children, value, index, ...other } = props;
  
  // /musclegroup/:id_group_muscle/exercise
 
  

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}
  
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [currency, setCurrency] = React.useState('EUR');

   
  const [id_group_muscle,setId_group_muscle] = useState(1);
  const [name,setName] = useState('');
  const [category,setCategory] = useState(''); 

  async function enviarDados(e){
    e.preventDefault();
     console.log(name,category);
    const resp = await api.post('/musclegroup/'+id_group_muscle+'/exercise',{
      name,category
    });

    console.log(name,category,resp);
  }


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}  >
          <Tab label="Exercicios"  />
          
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Card className={classes.card} width={200} variant="outlined">
        <form onSubmit={enviarDados}>
      <CardContent>
         
        <Typography className={classes.title} variant="h6" component="h6">
          + Exercicio
        </Typography>
          
         <Grid container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="center">
            <Grid item spacing={2}>
            <TextField className={classes.textField} 
            size="small"  
            label="Nome" 
            variant="outlined"
            name="name"
            value={name}
            onChange = {e=>setName(e.target.value)}
            />

        </Grid>
        <Grid item xs={3} spacing={2} >
          <TextField  
           fullWidth='150' 
           className={classes.textField}
           size="small"
           select label="Categoria"
           variant="outlined"
           name ={category}
           onChange = {e=>setCategory(e.target.value)}
           >
              <option>Musculação</option>
              <option>Aerobico</option>
              <option>Fit</option>
              <option>Hit</option>
              <option>N/A</option>
            </TextField>
        </Grid>
        <Grid xs={2} item spacing={2} >
        <TextField
          id="outlined-select-currency-native"
          select
          label="Musculo"
           size="small"
          value={currency}
           
          SelectProps={{
            native: true,
          }}
          
          variant="outlined"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>

        </TextField>
        </Grid>
         </Grid>    
      </CardContent>
      
      <CardActions>
         <Button type="submit" variant="contained"  color="primary" size="small">Salvar</Button>
          <Button variant="contained"  size="small">Novo</Button>
     
      </CardActions>
      </form>
    </Card>
    <Grid container
         spacing={2}
            direction="row"
            alignItems="center">
      <Grid item spacing={2}>
      <CardInfo/><CardInfo/><CardInfo/> 
    </Grid>
        <Grid item spacing={2} >
            <CardInfo/><CardInfo/><CardInfo/>
        </Grid>
        <Grid item spacing={2} >
            <CardInfo/><CardInfo/><CardInfo/>
        </Grid>
         </Grid>    
       
       </TabPanel>
      <TabPanel value={value} index={1}>
       
      </TabPanel>
      <TabPanel value={value} index={2}>
        
      </TabPanel>
    </div>
  );
}
