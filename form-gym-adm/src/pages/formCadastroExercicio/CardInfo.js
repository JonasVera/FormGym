import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './style.css';

 
export default function CardInfor({name,category,groupMuscle}) {
  
  return (
    <Card variant="outlined" className='cardInfor'>
      <CardContent>
         
        <Typography variant="h6" component="h6">
          {name}
        </Typography>
        <Typography   color="textSecondary">
          {category}
        </Typography>
        <Typography  color="textSecondary">
          {groupMuscle}
        </Typography>
        
      </CardContent>
      <CardActions>
         <Button color="primary" size="small">Editar</Button>
         <Button color="secondary"  size="small">Excluir</Button>
      </CardActions>
    </Card>
  );
}
