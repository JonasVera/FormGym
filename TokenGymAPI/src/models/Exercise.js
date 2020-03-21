const {Model,DataTypes} = require('sequelize');

class Exercise extends Model{
    static init(sequelize){
        super.init({
            name : DataTypes.STRING,
            category:DataTypes.STRING
        },{
            sequelize
        });
    }

    // CRIA AS ACOCIACOES COM AS TABELAS
    static associate(models){
        this.belongsTo(models.MuscleGroup, {foreignKey: 'id_group_muscle', as:'MuscleGroups'});
        this.hasMany(models.ExerciseForm, {foreignKey: 'id_exercise', as:'exerciseForms'});
         
    }
    
}
module.exports = Exercise;