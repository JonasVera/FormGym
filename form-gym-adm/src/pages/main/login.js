import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import BarMenu from './BarMenu';
const useStyles = makeStyles({
    root: {
     marginTop:'7%',
    paddingTop:'1%',   
    minWidth: 275,
      
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 30,
    },
    pos: {
      marginBottom: 12,
    },
    textField:{
        marginBottom:15,
        width:'100%',
        maxWidth:400
    }, 

  });
  
  
export default function Login() {
    const classes = useStyles();
   
  return (
      
    <>
    
         <BarMenu/>
       
      <CssBaseline />
      <Container maxWidth="sm">
    
      <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
            Login Form Gym
        </Typography>
        <Divider/>
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center">

        <form className={classes.root} noValidate autoComplete="off">
            <Grid item xs={12}>
            <TextField id="outlined-basic" size="small" className={classes.textField} label="Usuario ou E-mail" variant="outlined" />
            </Grid>
            <Grid item>
            <TextField id="outlined-basic" size="small" type='password' className={classes.textField} label="Senha" variant="outlined" labelWidth={70} />
            </Grid>
           
            <Button  href="/Authenticate" variant="outlined" size="small" fullWidth={'100%'} color="primary" className={classes.margin}>
                Login
            </Button>
        </form>
        </Grid>
        
      </CardContent>
      <Divider/>
      <CardActions>
          
      <Typography   color="textSecondary" >
            Ainda não é cadastrado ? 
        </Typography>
        <Button href="/Cadastro" size="large" color="primary" className={classes.margin}>
                Cadastre-se agora mesmo !!  
            </Button>
      </CardActions>
    </Card>
      </Container>
    </>
     
  );
}
