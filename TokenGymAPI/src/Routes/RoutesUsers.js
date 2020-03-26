const express = require('express');

const UserController = require('../controllers/UsersController');

const routesUser = express.Router();

 
 //routesUser.post('/user', UserController.store);
 //routesUser.get('/musclegroup', MuscleGroupController.index);
 //routesUser.delete('/musclegroup/:id_muscle_group', MuscleGroupController.delete);
 //routesUser.put('/musclegroup/:id_muscle_group', MuscleGroupController.update);
  
 
module.exports = routesUser;