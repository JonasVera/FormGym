const {Model,DataTypes} = require('sequelize');

class MuscleGroup extends Model{
    static init(sequelize){
        super.init({
            name : DataTypes.STRING,
            category:DataTypes.STRING
        },{
            sequelize
        })
    }
    static associate(models){
        this.hasMany(models.Exercise, {foreignKey: 'id_group_muscle', as:'exercises'});
    } 
}
module.exports = MuscleGroup;