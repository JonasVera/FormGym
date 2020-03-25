import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 170,
    maxHeight:150,
    marginBottom:10,
    marginTop:10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 10,
  },
 
});

export default function SimpleCard() {
  const classes = useStyles();
   

  return (
    <Card className={classes.root}>
      <CardContent>
         
        <Typography variant="h6" component="h6">
          Exercicio
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Categoria
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Musculo
        </Typography>
        
      </CardContent>
      <CardActions>
         <Button color="primary" size="small">Editar</Button>
         <Button color="secondary"  size="small">Excluir</Button>
      </CardActions>
    </Card>
  );
}
