import React,{Component} from 'react';
 
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
export default class CadastroExercicios extends Component{
    state = {
        MuscleName:[],
        category:'',
        id:''
    }   
    //     {attributes:['id','name','category']}
        //musclegroup
   componentDidMount(){
        this.loadSelectMusculo();
   };

   loadSelectMusculo = async () => {
    console.log("Teste"); 
    const res = await api.get('/muclegroup');
       this.setState({MuscleName:res.data});
       console.log(res);
   }
    render(){

    return(
   <>
  
      <Card className='cardForm' width={200} variant="outlined">
        <form  >
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
            name="name" />

        </Grid>
        <Grid item spacing={2} >
        <TextField SelectProps={{ native: true }}
           size="small"
           select label="Categoria"
           variant="outlined" >
              <option>Musculação</option>
              <option>Aerobico</option>
              <option>Fit</option>
              <option>Hit</option>
              <option>N/A</option>
            </TextField>
        </Grid>
        <Grid item spacing={2} >
        <TextField SelectProps={{ native: true }}
           size="small"
           select label="Categoria"
           variant="outlined" >
              <option>Musculação</option>
              <option>Aerobico</option>
              <option>Fit</option>
              <option>Hit</option>
              <option>N/A</option>
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
      <CardInfo name='1' category='1' groupMuscle='3' /><CardInfo/><CardInfo/> 
    </Grid>
        <Grid item spacing={2} >
            <CardInfo/><CardInfo/><CardInfo/>
        </Grid>
        <Grid item spacing={2} >
            <CardInfo classname="cardInfor"/><CardInfo/><CardInfo/>
        </Grid>
         </Grid>    
        
     </>
    );
   } 

}