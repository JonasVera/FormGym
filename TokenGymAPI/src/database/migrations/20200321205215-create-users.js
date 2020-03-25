'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
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
      email:{  
        type:Sequelize.STRING,
        allowNull:false,
      },
      password:{  
        type:Sequelize.STRING,
        allowNull:false,
        
      }, 
      token:{  
        type:Sequelize.STRING,
        allowNull:true,
        
      },
      status:{  
        type:Sequelize.STRING,
        allowNull:false,
        
      },
      type_user:{  // USER_DEFAUL OR ADM
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
  
      return queryInterface.dropTable('Users');
   
  }
};
