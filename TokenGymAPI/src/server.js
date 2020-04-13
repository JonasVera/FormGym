const express = require("express");
const routesGroupMuscles = require("./Routes/RoutesGroupMuscle");
const routesExercises = require("./Routes/RoutesExercises");
const routesExercisesForm = require("./Routes/RoutesExercisesForm");
const routesFormWorkout = require("./Routes/RoutesFormWorkout");
const routesUser = require("./Routes/RoutesUsers");
const cors = require("cors");
require("./database");
const app = express();
app.use(cors());
app.use(express.json());

app.use(routesGroupMuscles);
app.use(routesExercises);
app.use(routesExercisesForm);
app.use(routesFormWorkout);
app.use(routesUser);

app.listen(3232);
