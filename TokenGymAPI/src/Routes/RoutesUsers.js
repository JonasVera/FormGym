const express = require("express");

const UserController = require("../controllers/UsersController");

const routesUser = express.Router();

routesUser.post("/user", UserController.store);
routesUser.put("/user", UserController.register);
routesUser.get("/user/:id", UserController.index);
//routesUser.put('/musclegroup/:id_muscle_group', MuscleGroupController.update);

module.exports = routesUser;
