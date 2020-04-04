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
     marginTop:'3%',
     paddingTop:'1%',   
     minWidth: 275,
      
    },
   
    title: {
      fontSize: 25,
    },
    pos: {
      marginBottom: 10,
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
       
    <React.Fragment>
        <BarMenu/>
      
      <CssBaseline />
      <Container maxWidth="sm">
    
      <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
            Cadastre-se na Form Gym
        </Typography>
        <Divider/>
        <Grid
            container
            direction="row"
            justify="center"
             >  

        <form className={classes.root} noValidate autoComplete="off">
            <Grid item >
            <TextField id="outlined-basic" size="small" className={classes.textField} label="Nome de usuario" variant="outlined" />
            </Grid>
            <Grid item>
            <TextField id="outlined-basic" size="small" className={classes.textField} label="Email" variant="outlined" labelWidth={70} />
            </Grid>
            <Grid item>
            <TextField type='password' size="small" id="outlined-basic" className={classes.textField} label="Senha" variant="outlined" labelWidth={70} />
            </Grid>
            <Grid item>
            <TextField type='password' size="small" id="outlined-basic" className={classes.textField} label="Confirmar senha" variant="outlined" labelWidth={70} />
            </Grid>
           
            <Button variant="outlined" size="small" fullWidth={'100%'} color="primary" className={classes.margin}>
                Cadastrase-se
            </Button>
            
        </form>
        </Grid>
        
      </CardContent>
     
      <CardActions>
         
       <Typography   color="textSecondary" >
            Não se esqueça de prencher informações adicionais na sua conta
        </Typography>
         
      </CardActions>
    </Card>
      </Container>
    </React.Fragment>
     
  );
}
