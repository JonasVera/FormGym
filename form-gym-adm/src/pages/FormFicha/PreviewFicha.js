import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
const useStyles = makeStyles({
  root: {
    minWidth: 600,
    maxHeight: 500,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom:10,  
    fontSize: 14,
  },
  Avatar:{
      maxWidth:25,
      maxHeight:25, 
      marginTop:10,
      background:'#000',
  },
  Divider:{
      marginTop:0,
  },
  list:{
    margin:0,
    padding:0,  
    fontSize:10,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function PreViewFicha() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = event => {
      setChecked(event.target.checked);
    };
  
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const diasSeman = ['Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sabádo']  
  const musculos = ['Peito','Biceps','Coxa','Panturrilha','AnteBraço','Costa'];  
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
          <Typography>Preview da Ficha</Typography>
        <Divider/>
        <Grid container spacing={2}>
            <Grid item>
                <Avatar className={classes.Avatar}>S</Avatar>
                <List className={classes.list} aria-label="contacts">
                 <ListItem  className={classes.list} button>
                     <ListItemText className={classes.list} primary="Peito" />
                </ListItem>
                
            </List>
            </Grid>
            <Divider className={classes.Divider} orientation="vertical" flexItem />
            <Grid item>
            
            <Avatar className={classes.Avatar}>T</Avatar>
            <Divider orientation="vertical" flexItem />
            <List >
                 <ListItem className={classes.list} button>
                     <ListItemText className={classes.list} primary="Triceps" />
                </ListItem>
                <ListItem className={classes.list} button>
                     <ListItemText  inset className={classes.list} primary="Peito" />
                </ListItem>
                <ListItem className={classes.list} button>
                     <ListItemText  inset className={classes.list} primary="Supino reto 3x12" />
                </ListItem>
                <ListItem className={classes.list} button>
                     <ListItemText  className={classes.list} primary="Supino reto com alteres 3x12" />
                </ListItem>

            </List>
            
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item>
            <Avatar className={classes.Avatar} >Q</Avatar>
            <List >
                 <ListItem className={classes.list} button>
                     <ListItemText className={classes.list} primary="Peito" />
                </ListItem>
                <ListItem className={classes.list} button>
                     <ListItemText className={classes.list} primary="Peito" />
                </ListItem>
                <ListItem className={classes.list} button>
                     <ListItemText className={classes.list} primary="Peito" />
                </ListItem>
            </List>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item>
            <Avatar className={classes.Avatar} >Q</Avatar>
            <List >
                 <ListItem className={classes.list} button>
                     <ListItemText className={classes.list} primary="Peito" />
                </ListItem>
                <ListItem className={classes.list} button>
                     <ListItemText className={classes.list} primary="Peito" />
                </ListItem>
                <ListItem className={classes.list} button>
                     <ListItemText className={classes.list} primary="Peito" />
                </ListItem>
            </List>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item>
            <Avatar className={classes.Avatar}>S</Avatar>
            <List >
                 <ListItem className={classes.list} button>
                     <ListItemText className={classes.list} primary="Peito" />
                </ListItem>
                <ListItem className={classes.list} button>
                     <ListItemText className={classes.list} primary="Peito" />
                </ListItem>
                <ListItem className={classes.list} button>
                     <ListItemText className={classes.list} primary="Peito" />
                </ListItem>
            </List>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item>
            <Avatar className={classes.Avatar} >S</Avatar>
            <List >
                 <ListItem className={classes.list} button>
                     <ListItemText className={classes.list} primary="Peito" />
                </ListItem>
                <ListItem className={classes.list} button>
                     <ListItemText className={classes.list} primary="Peito" />
                </ListItem>
                <ListItem className={classes.list} button>
                     <ListItemText className={classes.list} primary="Peito" />
                </ListItem>
            </List>
            </Grid>
            
        </Grid>
     
      </CardContent>
      <CardActions>
       
        <Button>Salvar</Button>
      </CardActions>
    </Card>
  );
}
