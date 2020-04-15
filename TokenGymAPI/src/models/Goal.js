const { Model, DataTypes } = require("sequelize");

class Goal extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        goal: DataTypes.STRING,
        date_limit: DataTypes.DATE,
        current_weight: DataTypes.FLOAT,
        weigth_goal: DataTypes.FLOAT,
        status: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "id_user",
      as: "goals_user",
    });
  }
}
module.exports = Goal;
