const {Model,DataTypes} = require('sequelize');

class ExerciseForm extends Model{
    static init(sequelize){
        super.init({
            repetition : DataTypes.INTEGER,
            time:DataTypes.INTEGER,
            day:DataTypes.STRING,
            status_form:DataTypes.STRING
        },{
            sequelize
        });
    }

    static associate(models){
        this.belongsTo(models.Exercise, {foreignKey: 'id_exercise', as:'allexercises'});
        this.belongsTo(models.FormWorkout, {foreignKey: 'id_formidWorkout', as:'FormGym'});     
    }
}
module.exports = ExerciseForm;