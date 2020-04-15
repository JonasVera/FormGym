const express = require("express");

const UserController = require("../controllers/UsersController");

const routesUser = express.Router();

routesUser.post("/user", UserController.store);
routesUser.post("/user/authenticate", UserController.authenticate);
routesUser.put("/user", UserController.register);
routesUser.put("/user/updatepassword", UserController.updatePassword);
routesUser.get("/user/:id", UserController.index);

module.exports = routesUser;
