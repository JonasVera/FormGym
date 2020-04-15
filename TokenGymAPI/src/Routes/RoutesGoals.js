const express = require("express");

const GoalController = require("../controllers/GoalController");

const routesGoal = express.Router();

routesGoal.post("/user/goal/:id_user", GoalController.store);
routesGoal.get("/user/goal/:id_user", GoalController.index);
routesGoal.delete("/user/goal/:id_user", GoalController.delete);
routesGoal.put("/user/goal/:id_user", GoalController.update);
routesGoal.put("/user/goal/status/:id_user", GoalController.updateStatus);
//routesGoal.get("/user/:id", UserController.index);

module.exports = routesGoal;
