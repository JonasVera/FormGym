const express = require('express');

const FormWorkout = require('../controllers/FormWorkoutController');

const routesFormWorkout = express.Router();

 
 routesFormWorkout.post('/exerciseForm/formWorkout/:id_exerciseForm', FormWorkout.store);
 routesFormWorkout.get('/formWorkout', FormWorkout.index);
 //routesGroroutesFormWorkoutupMuscle.delete('/musclegroup/:id_muscle_group', MuscleGroupController.delete);

// ROUTES OF EXERCISES    
 
module.exports = routesFormWorkout;