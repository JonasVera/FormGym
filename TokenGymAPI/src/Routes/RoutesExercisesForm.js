const express = require('express');

const ExercisesFormController = require('../controllers/ExercisesFormController');

const RoutesexercisesFormController = express.Router();

 
 RoutesexercisesFormController.get('/exercise/exerciseForm', ExercisesFormController.index);
 RoutesexercisesFormController.post('/exercise/:id_exercise/exerciseForm', ExercisesFormController.store);
 RoutesexercisesFormController.delete('/exercise/:id/exerciseForm/', ExercisesFormController.delete);
 RoutesexercisesFormController.put('/exercise/:id/exerciseForm/', ExercisesFormController.update);
 //outesGroupMuscle.get('/musclegroup', MuscleGroupController.index);

// ROUTES OF EXERCISES    
 




module.exports = RoutesexercisesFormController;