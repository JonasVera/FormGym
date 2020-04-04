const express = require('express');

const FormWorkout = require('../controllers/FormWorkoutController');

const routesFormWorkout = express.Router();

 
 routesFormWorkout.post('/exerciseForm/formWorkout/', FormWorkout.store);
 routesFormWorkout.get('/exerciseForm/formWorkout', FormWorkout.index);
 routesFormWorkout.delete('/exerciseForm/:id/formWorkout',FormWorkout.delete);
 routesFormWorkout.put('/exerciseForm/:id/formWorkout',FormWorkout.update);
// ROUTES OF EXERCISES    
 
module.exports = routesFormWorkout;