const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const MuscleGroup = require('../models/MuscleGroup');
const Exercise = require('../models/Exercise');

const ExerciseForm = require('../models/ExersiseForm');
const connection = new Sequelize(dbConfig);

// INICIALIZA A CONEXÃO DO BANCO DE DADOS 
MuscleGroup.init(connection);
Exercise.init(connection);
ExerciseForm.init(connection);
// INICIALIZA AS INICIALIZACAOES
Exercise.associate(connection.models);
MuscleGroup.associate(connection.models);
ExerciseForm.associate(connection.models);

module.exports = connection;