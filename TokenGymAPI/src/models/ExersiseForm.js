const {Model,DataTypes} = require('sequelize');

class ExerciseForm extends Model{
    static init(sequelize){
        super.init({
            repetition : DataTypes.INTEGER,
            time:DataTypes.INTEGER,
            obs:DataTypes.STRING,
            status_form:DataTypes.STRING
        },{
            sequelize
        });
    }

    static associate(models){
        this.belongsTo(models.Exercise, {foreignKey: 'id_exercise', as:'allexercises'});
          
    }
}
module.exports = ExerciseForm;