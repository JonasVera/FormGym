import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import api from '../../services/api';
import ListItemText from '@material-ui/core/ListItemText'; 
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { styled } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth:400,
    maxHeight: 700,
  },
  
  title: {
    marginBottom:10,  
    fontSize: 14,
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

export default function PreViewFicha({data,name,id}) {
 
     const [nameExercise,setNameExercise] = useState(data);
     const [dia,setDia] = useState('seg');
     
     async function getPreviewFicha( ){
         const resp = await api.get(`exercise/exerciseForm/${38}`);
          
         setNameExercise(resp.data );
         console.log("ID: ",id);
     }

    useEffect(()=>{
        getPreviewFicha();
     },[]);
        
  const classes = useStyles();
    return (
    <Card className={classes.root} variant="outlined">
    <AppBarStyle position="static">
        <Toolbar>
           <Typography  >
            <Typography>Ficha: {name}</Typography> 
          </Typography>
        
        </Toolbar>
      </AppBarStyle>
       
         <Button  color="primary" onClick={()=>setDia('seg')}>Seg</Button>
         <Button  color="primary" onClick={()=>setDia('ter')}>Ter</Button>
         <Button  color="primary" onClick={()=>setDia('qua')}>Qua</Button>
         <Button  color="primary" onClick={()=>setDia('qui')}>Qui</Button>
         <Button  color="primary" onClick={()=>setDia('sex')}>Sex</Button>
         <Button  color="primary" onClick={()=>setDia('sab')}>Sab</Button>
 
          {nameExercise.map(value => {         
          if(value.exerciseForms[0].day === dia)
           return (
             <>
               
               <List >
                   <ListItem className={classes.list} button>
                  
                    {value.exerciseForms.map(item => {
                         if(item.day === dia)
                     return (
                        <>
                        <ListItem>
                          
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
  );
}
