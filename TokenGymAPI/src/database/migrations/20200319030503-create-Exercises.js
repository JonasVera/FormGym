'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     
      return queryInterface.createTable('Exercises', {
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
      id_group_muscle:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{model:'MuscleGroups', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
        
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
  
    return queryInterface.dropTable('Exercises');
  
}
}

