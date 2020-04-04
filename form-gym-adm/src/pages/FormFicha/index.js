import React,{useEffect,useState} from 'react';
 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PreviewFicha from './PreviewFicha';
import { makeStyles } from '@material-ui/core/styles';
import CardFicha from './CardFichas';
import api from '../../services/api';
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
  const [fichas,setFichas] = useState(['']);
  async function loadFichas(idMusculo){
    
    const resp = await api.get(`exerciseForm/formWorkout`);
     setFichas(resp.data);      
     
  } 
  async function deleteFicha(id){
    const resp = await api.delete(`exerciseForm/${id}/formWorkout`);
    console.log(resp);
    loadFichas();
   } 

  useEffect(()=>{
    loadFichas();
  },[])
  const classes = useStyles();
   
  return (
      <> 
    <CardDay/>
    
    <Card >
      <CardContent>
         
        <Typography className={classes.title} variant="h6" component="h6">
         Ficha de Treino
        </Typography>
         
      
          <Grid container item xs={12} spacing={4}>

           
          {fichas.map(value => {
                  return (
                    <CardFicha key={value.id}
                     name={value.name} 
                     data={value.createdAt} 
                     atualizacao={value.updatedAt}
                     onDelete={()=>{deleteFicha(value.id)}}
                     />
                 );
              })}
 
      
         
        </Grid>    
    
      </CardContent>
    </Card>
    </>
  );
}