import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NavigateNext from '@material-ui/icons/NavigateNext';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginLeft:10
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Seg', 'Ter', 'Qua','Qui','Sex','Sab'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Crie o treino da Segunda-feira !!';
    case 1:
        return 'Crie o treino da Terça-feira !!';
    case 2:
        return 'Crie o treino da Quarta-feira !!';
    case 3:
        return 'Crie o treino da Quinta-feira !!';
    case 4:
        return 'Crie o treino da Sexta-feira !!';
    case 5:
        return 'Crie o treino da Sábado !!';
    default:
      return 'Unknown step';
  }
}

export default function StepDias() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = step => {
    return step === 7;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
        
      throw new Error("Passo opcional");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
             Sua Ficha está concluida !
            </Typography>
            <Button color="primary"
                  variant="outlined" onClick={handleReset}  className={classes.button}>
              Novo
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button color="primary"   size="small"
                  variant="outlined"  startIcon={<NavigateBefore/>}
                  disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Voltar
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                size="small"
                  color="primary"
                  variant="outlined"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Pular
                </Button>
              )}

              <Button
                size="small"
                variant="contained"
                color="primary"
                variant="outlined"
                onClick={handleNext}
                className={classes.button}
                endIcon={<NavigateNext/>}
              >
                
                {activeStep === steps.length - 1 ? 'Finalizado' : 'Proximo'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}