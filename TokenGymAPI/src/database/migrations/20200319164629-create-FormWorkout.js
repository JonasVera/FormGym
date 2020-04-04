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
      name:{ // VEZES (REPETITION X TIME = 3X12 )
        type:Sequelize.STRING,
        allowNull:true,
        
      },
      obs:{ // VEZES (REPETITION X TIME = 3X12 )
        type:Sequelize.STRING,
        allowNull:true,
        
      }, 
      status_item:{  // ATIVO / INATIVO
        type:Sequelize.STRING,
        allowNull:true,
        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    
     return queryInterface.dropTable('FormWorkouts');
  
  }
};
