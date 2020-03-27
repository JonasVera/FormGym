import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './style.css';

 
export default function CardInfor({name,category,musculo,categoryExercicio,onDelete,onEdit }) {
  
  return (
    <Card variant="outlined" className='cardInfor'>
      <CardContent>
         
        <Typography variant="h6" component="h6">
         Exercicio: {name}
        </Typography>
        <Typography  color="textSecondary">
          Musculo: {musculo}
        </Typography>
        <Typography   color="textSecondary">
          Categoria: {category}
        </Typography>
        

        <Typography  color="textSecondary">
         Sub Cartegoria: {categoryExercicio}
        </Typography>
        
      </CardContent>
      <CardActions>
         <Button color="primary" onClick={onEdit} size="small">Editar</Button>
         <Button color="secondary" onClick={onDelete}  size="small">Excluir</Button>
      </CardActions>
    </Card>
  );
}
