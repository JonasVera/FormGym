import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import StepDias from './StepDias'; 
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Today from '@material-ui/icons/Today';
 
  
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import Toolbar from '@material-ui/core/Toolbar';
import PreViewFicha from './PreviewFicha';
import api from '../../services/api';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { Divider } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    maxWidth: '80%',
    marginBottom:10,
    
  
  },
  cardFicha: {
    marginTop:12,
    marginLeft:20,
    minWidth:400,
    maxHeight: 700,
  },
  textField:{
    marginTop:10,
    marginBottom:10,
    marginLeft:0,
    paddingLeft:2,
    width:111
     
 
  },
  PreViewFicha:{
    marginTop:10,
    marginRight:20
  },
  listExercises:{
    
    marginRight:0,
    paddingLeft:2,
    paddingRight:2,
    width:111  
  },
  selectDia: {
    display: 'inline-block',
    marginRight: 10,
     
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
    marginBottom:10

  },
  selectEmpty: {
    marginTop: 5  ,
  },  
  btnFicha:{
    marginLeft:10,  
    marginRight:10
  
  },
  pnCFicha:{
   marginBottom:10 
  },
  list:{
    margin:0,
    padding:0,
    fontSize:15,
  },
 
});
const AppBarStyle = styled(AppBar)({
  background: 'linear-gradient(45deg, #483D8B 30%, #836FFF 90%)',
  border: 0,
  color: 'white',
  height: 50,
  
});
 
export default function CardDay() {
  const [exercises,setExercises] = useState(['']); 
  const [musculos,setMusculos] = useState(['']);
  const [idMusculo,setIdMusculo] = useState(0); 
  const [name,setName] = useState();
  const [id,setId] = useState();
  const [id_formWorkout,setId_formWorkout] = useState();
  const [id_exercise,setId_exercise] = useState();
  const [repetition,setRepetition] = useState();
  const [time,setTime] = useState();
  const [day,setDay] = useState('seg');
  const [data,setData] = useState([]);
  const [avisos,setAvisos] = useState();
  const [habilitaCampos,setHabilitaCampos] = useState(false); 
  
  const classes = useStyles();

  async function criarFicha(name){
   
    const resp = await api.post('/exerciseForm/formWorkout/',{
      name
    });
  
    console.log(resp.data.id);
    
      let idd = resp.data.id;
      setId_formWorkout(idd);
  }
  async function getPreviewFicha(){
    const resp = await api.get(`exercise/exerciseForm/${id_formWorkout}`);
   
     setData(resp.data);
     console.log(resp.data);
    }

    async function loadMuscle(){
    
      const resp = await api.get('musclegroup');
      setMusculos(resp.data);      
        
    } 
    
   function setDadosEdt(time,repetition,muscleID){
      setTime(time);
      setRepetition(repetition);
      setIdMusculo(muscleID);
      loadExercices(idMusculo);
   }  
     
  async function editarItemFicha(id_muscle,serie,repeticao,idFicha){
    const resp = await api.put(`/exercise/${id_exercise}/exerciseForm`,{
      id_formWorkout,day,repetition,time
    })
    getPreviewFicha();
  }
  function rtDia (dia){
    setDay(dia);
  }

  async function addExercicio(){
    if(id === null || id === ''|| name === '' || name === null){
      setAvisos('Crie uma ficha antes de adicionar os exercicios !!');
  }else{
    const resp = await api.post(`exercise/${id_exercise}/exerciseForm`,{
      id_formWorkout,day,repetition,time
     });
     getPreviewFicha();
  }
    
 }
 
  async function loadExercices(idMusculo){
    
    const resp = await api.get(`musclegroup/${idMusculo}/getexercise`);
     setExercises(resp.data);      
     console.log(resp.data);

  }  
 


  useEffect(()=>{
    loadMuscle();
      
  },[]);

  return (
    <> 

    <Card className={classes.root} >
    <AppBarStyle position="static">
        <Toolbar>
           <Typography  >
            Criar ficha de Treino
          </Typography>
        
        </Toolbar>
      </AppBarStyle>
      <CardContent>

      <h1>{avisos}</h1>
    
      <div className={classes.pnCFicha}>    
      

      <TextField  className={classes.btnFicha} size="small" value={name} onChange={e=>{setName(e.target.value)}} required label="Nome da ficha" variant="outlined" />
      <Button variant="contained" 
      onClick={()=>criarFicha(name)} 
      color="primary">Criar Ficha </Button>
       </div>         
        <Grid container
         spacing={2}
         direction="row" >  
           <Grid item spacing={2}>
            <FormControl size="small"
             disable={habilitaCampos}
             variant="outlined"
             className={classes.formControl}>
            
             <TextField SelectProps={{ native: true }}
               size="small"
               disable={habilitaCampos}
               select label="Musculo"
               variant="outlined"
               className={classes.formControl}
               onClick={(e)=>{loadExercices(e.target.value)}} 
               required >
               <option selec  >Selecione</option>
                  {musculos.map(musculo =>(
                    <option key={musculo.id} value={musculo.id} >
                  {musculo.name}
                </option>
      
                ))} 
              </TextField>

              <TextField SelectProps={{ native: true }}
               size="small"
               select label="Exercicio"
               variant="outlined"
               className={classes.formControl}
               onClick={(e)=> {setId_exercise(e.target.value)}}
               required >
               <option selec  >Selecione</option>
                  {exercises.map(musculo =>(
                    <option key={musculo.id} value={musculo.id} >
                  {musculo.name}
                </option>
      
                ))} 
              </TextField>

                 <Grid>
                     <TextField size="small" 
                     type='number' 
                     InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                     className={classes.textField}
                     value={time}
                     valueDefault={3}
                     required
                     onChange={e=>setTime(e.target.value)}
                     label="Serie"
                   
                    />

                     <TextField size="small" 
                        disabled ={habilitaCampos}
                        type='number' 
                        required
                        className={classes.textField}
                        value={repetition}
                        onChange={e=>setRepetition(e.target.value)} 
                        label="Repetição"  
                        variant="outlined"
                        valueDefault={12}
                        InputLabelProps={{shrink: true,}}/>
                  
                    
                    < Grid>
                    <TextField  SelectProps={{ native: true }}
                       className={classes.selectDia}
                      size="small"
                      select label="Dia"
                      variant="outlined"
                      onClick={(e)=>setDay(e.target.value)}
                      required >
                        <option>Selecione</option>
                        <option value='seg'>Seg</option>
                        <option value='ter'>Ter</option>
                        <option value='qua'>Qua</option>
                        <option value='qui'>Qui</option>
                        <option value='sex'>Sex</option>
                        <option value='sab'>Sab</option>
                    </TextField>
                      <Button   
                        onClick={addExercicio}
                        variant="contained" 
                        color="primary">
                        Adicionar na ficha
                      </Button>
                </Grid>
               </Grid>
              </FormControl>
              <Divider/>
      
            </Grid>
             <Grid>
             <Card className={classes.cardFicha} variant="outlined">
    <AppBarStyle position="static">
        <Toolbar>
           <Typography  >
            <Typography>Ficha: {name}</Typography> 
          </Typography>
        
        </Toolbar>
      </AppBarStyle>
       
         <Button  color="primary" onClick={()=>setDay('seg')}>Seg</Button>
         <Button  color="primary" onClick={()=>setDay('ter')}>Ter</Button>
         <Button  color="primary" onClick={()=>setDay('qua')}>Qua</Button>
         <Button  color="primary" onClick={()=>setDay('qui')}>Qui</Button>
         <Button  color="primary" onClick={()=>setDay('sex')}>Sex</Button>
         <Button  color="primary" onClick={()=>setDay('sab')}>Sab</Button>
          <List>
             <ListItem>
             <ListItemIcon>
            <Today />
          </ListItemIcon>
             <ListItemText className={classes.list}
                          primary={`Treino da ${day}`} />
                       
               </ListItem>         
                                 
          </List>           
          {data.map(value => {         
          if(value.exerciseForms[0].day === day)
           return (
             <>
               
               <List >
                   <ListItem className={classes.list} button>
                  
                    {value.exerciseForms.map(item => {
                         if(item.day === day)
                     return (
                        <>
                        <ListItem onClick={e=>setDadosEdt(item.time,item.repetition,value.MuscleGroups.id)}>
                         
                        <ListItemText className={classes.list}
                          primary={`${value.MuscleGroups.name} ${value.name} |
                            ${item.time} 
                            x ${item.repetition}`} />
                        </ListItem>
                       
                        </>
                        )
                      })
                  }
                </ListItem>                 
             </List>
             <Divider/>
            </>
        );     
      })} 
      
    </Card>
            </Grid>
      </Grid>

      </CardContent>
        
      <CardActions>
      
      </CardActions>
    </Card>
    </>
  );
}