const {Model,DataTypes} = require('sequelize');

class FormWorkout extends Model{
    static init(sequelize){
        super.init({
            name : DataTypes.STRING,
            obs:DataTypes.STRING,
            
        },{
            sequelize
        });
    }

    static associate(models){
        this.hasMany(models.ExerciseForm, {foreignKey: 'id_formWorkout', as:'Workouts'});
    } 
}
module.exports = FormWorkout;