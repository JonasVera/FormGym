const {Model,DataTypes} = require('sequelize');

class FormWorkout extends Model{
    static init(sequelize){
        super.init({
            day : DataTypes.STRING,
            obs:DataTypes.STRING,
            status_item:DataTypes.STRING,
            
        },{
            sequelize
        });
    }

    static associate(models){
        this.belongsTo(models.ExerciseForm, {foreignKey: 'id_exerciseForm', as:'itemFormExercise'}); 
    }
}
module.exports = FormWorkout;