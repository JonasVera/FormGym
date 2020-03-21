'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.createTable('MuscleGroups', {
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      category:{
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
    
       return queryInterface.dropTable('MuscleGroup');
    
  }
}

