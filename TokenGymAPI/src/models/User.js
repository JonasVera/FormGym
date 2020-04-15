const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        token: DataTypes.STRING,
        status: DataTypes.STRING,
        category: DataTypes.STRING,
        respiratory_problem: DataTypes.STRING,
        sex: DataTypes.STRING,
        height: DataTypes.INTEGER,
        weigth: DataTypes.FLOAT,
        date_of_birth: DataTypes.DATE,
        type_user: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Goal, { foreignKey: "id_user", as: "goals" });
  }
}
module.exports = User;
