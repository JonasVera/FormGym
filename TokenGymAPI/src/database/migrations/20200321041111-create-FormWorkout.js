'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FormWorkouts', {
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      id_exerciseForm:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{model:'ExerciseForms', key:'id'},
        onUpdate:'CASCADE',
        
      },
      day:{ // REPETICAO
        type:Sequelize.STRING,
        allowNull:false,
      },
      obs:{ // VEZES (REPETITION X TIME = 3X12 )
        type:Sequelize.STRING,
        allowNull:false,
        
      }, 
      status_item:{  // ATIVO / INATIVO
        type:Sequelize.STRING,
        allowNull:false,
        
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
    
     return queryInterface.dropTable('FormWorkouts');
  
  }
};
