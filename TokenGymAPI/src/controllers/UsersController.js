const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  async index(req, res) {
    const { id } = req.params;
    user = await User.findByPk(id);
    return res.json(user);
  },
  async store(req, res) {
    let { name, email, password, type_user } = req.body;
    password = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password, type_user });
    return res.json(user);
  },

  async register(req, res) {
    // FINALIZAR O CADASTRO DO USUARIO
    let { id, sex, height, weigth, date_of_birth } = req.body;
    user = await User.findByPk(id);

    if (!user) {
      return res.status(400).json({ error: "Usuário não existe !" });
    } else {
      date_of_birth = new Date(date_of_birth);
      user = await User.update(
        { sex, height, weigth, date_of_birth },
        {
          where: { id: id },
        }
      );
      return res.json(user);
    }
  },
};
