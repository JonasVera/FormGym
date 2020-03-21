const express = require('express');
 
const ExercisesController = require('../controllers/ExercisesController');
const ExercisesRouter = express.Router();
 

// ROUTES OF EXERCISES    
ExercisesRouter.post('/musclegroup/:id_group_muscle/exercise', ExercisesController.store);
ExercisesRouter.get('/musclegroup/exercise', ExercisesController.index);
ExercisesRouter.delete('/musclegroup/:id_exercise/exercise', ExercisesController.delete);
ExercisesRouter.put('/musclegroup/:id_exercise/exercise', ExercisesController.update);
  
module.exports = ExercisesRouter;