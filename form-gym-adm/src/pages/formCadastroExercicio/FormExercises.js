import React,{useEffect,useState} from 'react';
 
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CardInfo from './CardInfo';
import api from '../../services/api';
import './style.css';
export default function CadastroExercicios (){
  
          const [musculos, setMusculos] = useState([]); 
          const [exercises,setExercises] = useState([]);
          const [name,setName] = useState('');
          const [musculo,setMusculo] = useState('');
          const [category,setCategory] = useState('');
          const [id,setId] = useState('');
          const [status,setStatus] = useState('');
             // GET =>musclegroup 

            //POST => api.post(`musclegroup/${this.state.id}/exercise`);
          
        function newExercise(){
          setStatus('New');
          setName('');
          setMusculo('');
          setCategory('');
          setId('');
            
        } 

    
         async function loadCardsExercises(){
           const resp = await api.get('musclegroup/exercise');
           setExercises(resp.data);
            
           
         }   
         async function loadExercises(){
          const resp = await api.get('musclegroup');
          setMusculos(resp.data);
          
        }   
        async function handleExercises (e){
          e.preventDefault();
         
          if(status === 'Editar'){
               //await api.put('musclegroup/'+id+'/exercise',{
              //name,category 

            // });
             console.log('dados: ',name,category,id);
          }else{
             const resp = await api.post('musclegroup/'+id+'/exercise',{
                 name,category 
            }   
          );
        }
      
        loadCardsExercises();
        
        }   
          
        function  loadCamposEdit(name,categoria,id,musculo){
           
            setName(name);
            setCategory(categoria);
            setId(id);
            setMusculo(musculo);
            setStatus('Editar');
           
           console.log(name,musculo,category,id);
        }  

        
        async function handleDelete(id_exercise){
         
          await api.delete(`musclegroup/${id_exercise}/exercise`);
          loadCardsExercises();
        }
         // form para add exercicios


         useEffect (()=>{
          loadExercises();
          loadCardsExercises();

       },[]);


    return(
   <>
      <Card className='cardForm' width={200} variant="outlined">
        <form onSubmit={handleExercises}>
      <CardContent>
         
        <Typography  variant="h6" component="h6">
          + Exercicio
        </Typography>
          
         <Grid container
         className='textFieldSelect'
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="center">
     <Grid item spacing={2}>
     
     <TextField  
            size="small"  
            label="Nome" 
            variant="outlined"
            name="name"
            type='text'
            value={name}
            onChange={e=>setName(e.target.value)}
         /> 

        </Grid>
        <Grid item spacing={2} >

        <TextField SelectProps={{ native: true }}
           size="small"
           select label="Musculo"
           variant="outlined"
           value={id}
           
           onChange={e=>setId(e.target.value)} > 
           <option  select >{status === 'Editar' ? musculo : 'Selecione' }</option>
            {musculos.map(musculo=>(
             
               <option key={musculo.id} value={musculo.id} >
                {musculo.name}
              </option>
            ))}

            </TextField>
        </Grid>
        <Grid item spacing={2} >
        <TextField SelectProps={{ native: true }}
           size="small"
           select label="Categoria"
           variant="outlined" 
           value={category}
           onChange={e=>setCategory(e.target.value)}
          >
            <option select>{status === 'Editar' ? category : 'Selecione' }</option>
            <option >Musculação</option>
            <option >Aerobico</option>
            <option >Hit</option>
            <option >Fit</option>
            </TextField>
        </Grid>
        </Grid>    
      </CardContent>
      
      <CardActions>
         <Button type='submit' variant="contained"  color="primary" size="small">Salvar</Button>
          <Button variant="contained" type='resert' onClick={newExercise} size="small">Novo</Button>
     
      </CardActions>
      </form>
    </Card>

    <Grid container
         spacing={3}
        direction="row"
        alignItems="center">
        
    {exercises.map(exercise =>(    
          exercise.exercises.map(exer =>(
         <CardInfo key={exer.id} 
       name={exer.name}
       category={exer.category}
       groupMuscle={exercise.category} 
       musculo={exercise.name}
       categoryExercicio={exercise.category}
       onDelete={()=>{ handleDelete(exer.id)}}
       onEdit={()=>{loadCamposEdit(exer.name,exercise.category,exer.id,exer.category)}}
       />
              
      )) 
  ))}

  </Grid>    
        
</>
    );
    
}



 