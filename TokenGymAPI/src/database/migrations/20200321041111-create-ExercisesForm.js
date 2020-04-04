'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ExerciseForms', {
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      
      id_formWorkout:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{model:'FormWorkouts', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
      },
      id_exercise:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{model:'Exercises', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
        
      },
      
      repetition:{ // REPETICAO
        type:Sequelize.INTEGER,
        allowNull:true,
      },
      time:{ // VEZES (REPETITION X TIME = 3X12 )
        type:Sequelize.INTEGER,
        allowNull:true,
        
      },
      day:{ 
        type:Sequelize.STRING,
        allowNull:false,
      },
       
      obs:{  
        type:Sequelize.TEXT,
        allowNull:true,
        
      },
      status_form:{  // ATIVO / INATIVO
        type:Sequelize.STRING,
        allowNull:true,
  
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt  : {
      allowNull: false,
      type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('ExerciseForms');
  
  }
};
