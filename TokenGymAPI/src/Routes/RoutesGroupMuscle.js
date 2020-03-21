const express = require('express');

const MuscleGroupController = require('../controllers/MuscleGroupController');

const routesGroupMuscle = express.Router();

 // ROUTES OF GROUP MUSCLE
 routesGroupMuscle.post('/musclegroup', MuscleGroupController.store);
 routesGroupMuscle.get('/musclegroup', MuscleGroupController.index);
 routesGroupMuscle.delete('/musclegroup/:id_muscle_group', MuscleGroupController.delete);

// ROUTES OF EXERCISES    
 
module.exports = routesGroupMuscle;