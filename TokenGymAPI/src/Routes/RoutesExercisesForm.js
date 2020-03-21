const express = require('express');

const ExercisesFormController = require('../controllers/ExercisesFormController');

const RoutesexercisesFormController = express.Router();

 // ROUTES OF GROUP MUSCLE
 RoutesexercisesFormController.get('/exerciseForm/:id_exercise', ExercisesFormController.index);
 RoutesexercisesFormController.get('/exerciseForm/', ExercisesFormController.all);
 RoutesexercisesFormController.get('/exerciseForm/Pesq', ExercisesFormController.pesquisa);
 RoutesexercisesFormController.post('/exerciseForm/:id_exercise', ExercisesFormController.store);
 RoutesexercisesFormController.delete('/exerciseForm/:id', ExercisesFormController.delete);

 //outesGroupMuscle.get('/musclegroup', MuscleGroupController.index);

// ROUTES OF EXERCISES    
 




module.exports = RoutesexercisesFormController;