const express = require("express");

const ExercisesController = require("../controllers/ExercisesController");
const ExercisesRouter = express.Router();
const authMiddleware = require("../middlewares/auth");
ExercisesRouter.use(authMiddleware);
// ROUTES OF EXERCISES
ExercisesRouter.post(
  "/musclegroup/:id_group_muscle/exercise",
  ExercisesController.store
);
ExercisesRouter.get("/musclegroup/exercise", ExercisesController.index);
ExercisesRouter.get(
  "/musclegroup/:id_group_muscle/getexercise",
  ExercisesController.getExercises
);
ExercisesRouter.delete(
  "/musclegroup/:id_exercise/exercise",
  ExercisesController.delete
);
ExercisesRouter.put(
  "/musclegroup/:id_exercise/exercise",
  ExercisesController.update
);

module.exports = ExercisesRouter;
