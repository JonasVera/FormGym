const {Model,DataTypes} = require('sequelize');

class User extends Model{
    static init(sequelize){
        super.init({
            name : DataTypes.STRING,
            email:DataTypes.STRING,
            password:DataTypes.STRING,
            status:DataTypes.STRING,
            type_user:DataTypes.STRING

        },{
            sequelize
        })
    }
    //static associate(models){
    //    this.hasMany(models.Exercise, {foreignKey: 'id_group_muscle', as:'exercises'});
    //} 
}
module.exports = User;