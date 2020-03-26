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

export default function CardObjetivo() {
  const classes = useStyles();
   return (
    <Card  variant="outlined" className={classes.root}>
    <IconButton aria-label="delete" color="primary">
        <DeleteIcon />
      </IconButton>
      <CardContent>
          
        <Typography>
          Objetivo
        </Typography>
      
        <Typography variant="body2" component="p">
           Data: 00/00/0000
        </Typography>
         <Typography variant="body2" component="p">
           Peso Meta: 00,00
        </Typography>
         <Typography variant="body2" component="p">
           Peso atual: 00,00
        </Typography>
        <Typography variant="body2" component="p">
         50% de progresso
        </Typography>
       <LinearProgress variant="determinate" value={50} />
      </CardContent>
      <CardActions>
     
        <Button size="small">Atualizar</Button>
        <Button size="small">Concluir</Button>
       
      </CardActions>
    </Card>
  );
}
