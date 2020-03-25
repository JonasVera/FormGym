import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
 
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
 
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import CardInfo from './CardInfo';
function TabPanel(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
       
      },
    },
    card:{
      minWidth:200,
      width:'50%',  
      marginLeft:20,
    },
    textField:{
      padding:8,
      marginTop:10,
      minWidth:500
    } 
  }));
  const classes = useStyles();
  const { children, value, index, ...other } = props;
 

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}  >
          <Tab label="Exercicios" {...a11yProps(0)} />
          
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Card className={classes.card} width={200} variant="outlined">
      <CardContent>
         
        <Typography className={classes.title} variant="h6" component="h6">
          + Exercicio
        </Typography>
          
         <Grid container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="center">
            <Grid item spacing={2}>
            <TextField className={classes.textField} size="small" id="outlined-basic" label="Nome" variant="outlined" />

        </Grid>
        <Grid item xs={3} spacing={2} >
          <TextField   fullWidth='150'  className={classes.textField} size="small"
               select label="Categoria" variant="outlined" >
              <option>Musculação</option>
              <option>Aerobico</option>
              <option>Fit</option>
              <option>Hit</option>
              <option>N/A</option>
            </TextField>
        </Grid>
        <Grid xs={2} item spacing={2} >
        <TextField   fullWidth='150'  className={classes.textField} size="small"
               select label="Grupo muscular" variant="outlined" >
              <option>Musculação</option>
              <option>Aerobico</option>
              <option>Fit</option>
              <option>Hit</option>
              <option>N/A</option>
            </TextField>
        </Grid>
         </Grid>    
      </CardContent>
      
      <CardActions>
            <Button variant="contained"  color="primary" size="small">Salvar</Button>
           <Button variant="contained"  size="small">Novo</Button>
     
      </CardActions>
      
    </Card>
    <Grid container
         spacing={2}
            direction="row"
            alignItems="center">
      <Grid item spacing={2}>
      <CardInfo/><CardInfo/><CardInfo/> 
    </Grid>
        <Grid item spacing={2} >
            <CardInfo/><CardInfo/><CardInfo/>
        </Grid>
        <Grid item spacing={2} >
            <CardInfo/><CardInfo/><CardInfo/>
        </Grid>
         </Grid>    
       
       </TabPanel>
      <TabPanel value={value} index={1}>
       
      </TabPanel>
      <TabPanel value={value} index={2}>
        
      </TabPanel>
    </div>
  );
}
