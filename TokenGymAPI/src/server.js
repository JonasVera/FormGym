const express = require('express');
const routesGroupMuscles = require('./Routes/RoutesGroupMuscle');
const routesExercises = require('./Routes/RoutesExercises');
const routesExercisesForm = require('./Routes/RoutesExercisesForm');

require('./database');
const app = express();


app.use(express.json());
app.use(routesGroupMuscles);
app.use(routesExercises);
app.use(routesExercisesForm);

app.listen(3030);