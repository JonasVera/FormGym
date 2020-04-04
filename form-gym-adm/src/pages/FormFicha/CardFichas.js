import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Cancel';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
const useStyles = makeStyles({
  root: {
    maxWidth:180,
    maxHeigth:180,
    margin:10,
    borderRadius:0,
    borderLeft:'solid 4 #000',
  
   
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
   
});

export default function CardObjetivo({name,data,atualizacao,onDelete}) {
  const classes = useStyles();
   return (
    <Card  variant="outlined" className={classes.root}>
    <IconButton onClick={onDelete} aria-label="delete" color="secondary">
        <DeleteIcon />
      </IconButton>
      <CardContent>
          
        <Typography>
          {name}
        </Typography>
      
        <Typography variant="body2" component="p">
          Criação: {data}
        </Typography>
         <Typography variant="body2" component="p">
          Atualização:{atualizacao}
        </Typography>
        
      </CardContent>
      <CardActions>
     
        <Button size="small">Atualizar</Button>
     
      </CardActions>
    </Card>
  );
}
