import React from 'react';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
 import { styled } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    width: '95%',
    paddingTop:3,
     
  },
  card:{
    width:'60%', 
    marginLeft:10,
  },
  cardSenha:{
    marginTop:10,
    width:300,
    padding:10,   
 
  },
  textField:{
    padding:8,
    marginTop:3,
    minWidth:280
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(1, 1),
  },
  section2: {
    margin: theme.spacing(0.5, 0.5, 0.5),
  },
  section3: {
    margin: theme.spacing(0.5, 0.5, 0.5),
  },
}));
const AppBarStyle = styled(AppBar)({
  background: 'linear-gradient(45deg, #483D8B 30%, #836FFF 90%)',
  border: 0,
  color: 'white',
  height: 60,
  padding: '0 30px',
});

export default function ContaUser() {
  const classes = useStyles();

  return (
      <>
  <Grid container spacing={1}>
  <Grid item >
  <Card>
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h5">
              Usuario
            </Typography>
          </Grid>
           
        </Grid>
        <Typography color="textSecondary" variant="body2">
              Data de Cadastrado:
        </Typography>
        <Typography color="textSecondary" variant="body2">
             Fichas Criadas:
        </Typography>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
        <Typography gutterBottom variant="body1">
          Ainda Falta algumas informações
        </Typography>
        <LinearProgress variant="determinate" value={70} color="Primary" />
 
      </div>
      <div className={classes.section3}>
        <Button color="primary"></Button>
      </div>
    </div>
    </Card>
    <Card className={classes.cardSenha}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
           Redefinir Senha
        </Typography>
      <CardContent>
      <TextField  size="small" className={classes.chip} fullWidth={'100%'} type='password' id="outlined-basic" label="Senha Atual" variant="outlined" />
      <TextField  size="small" className={classes.chip}fullWidth={'100%'}  type='password' id="outlined-basic" label="Nova Senha" variant="outlined" />
      <TextField  size="small" className={classes.chip} fullWidth={'100%'}type='password' id="outlined-basic" label="Confirmar nova Senha" variant="outlined" />
      <Button size="small"  variant="contained" fullWidth={'100%'} color="primary" className={classes.chip}>
        
         Redefinir senha
        </Button>
      </CardContent>    
    </Card>
    </Grid> 
    
    <Card className={classes.card}>
    
    
      <CardContent>
       
       
        <Typography variant="h5" component="h2">
         
        </Typography>
        <Grid container>
           <Grid item>
              <TextField  size="small" className={classes.textField} id="outlined-basic" label="Nome" variant="outlined" />
           </Grid>
           <Grid item>
              <TextField size="small" type='email' className={classes.textField} id="outlined-basic" fullWidth="100%" label="E-mail" variant="outlined" />
           </Grid>
           <Grid item>
            <TextField className={classes.textField} size="small"
               select label="Status" variant="outlined" >
              <option>Ativo</option>
              <option>Inativo</option>
            </TextField>
           </Grid>
  
           <Grid item>
              <TextField size="small" type='date'  defaultValue="2020-03-24" className={classes.textField}   id="outlined-basic" fullWidth="100%" label="Data Nascimento" variant="outlined" />
           </Grid>
           <Grid item>
            <TextField className={classes.textField} size="small"
               select label="Sexo" variant="outlined" >
              <option>Masculino</option>
              <option>Feminino</option>
            </TextField>
           </Grid>
           
        </Grid>
       
        <Typography size="small" className={classes.title} color="textSecondary" gutterBottom>
         Saude
        </Typography>
        <Divider/>
        <Grid container>
           <Grid item>
              <TextField  size="small" className={classes.textField} type='number' id="outlined-basic" label="Peso" variant="outlined" />
           </Grid>
           <Grid item>
              <TextField size="small"   className={classes.textField} type='number'  id="outlined-basic" fullWidth="100%" label="Altura" variant="outlined" />
           </Grid>
           <Grid item>
            <TextField className={classes.textField} size="small"
               select label="Categoria" variant="outlined" >
              <option>Iniciante</option>
              <option>Intermediario</option>
              <option>Profissional</option>
              <option>Bodybuilder</option>
            </TextField>
           </Grid>
   
           <Grid item>
            <TextField className={classes.textField} size="small"
               select label="Problema respiratorio ?" variant="outlined" >
              <option>Sim</option>
              <option>Não</option>
            </TextField>
           </Grid>
           
        </Grid>
         
      </CardContent>
    
      <CardActions>
  
        <Button variant="contained" size="small" color="primary">
          Salvar
        </Button>

        <Button variant="outlined" size="small">
          Redefinir
        </Button>
      </CardActions>
    </Card>
 </Grid>    
    </>
  );
}
