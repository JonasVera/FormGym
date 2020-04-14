const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

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

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: 86400,
    });
    user.token = token;

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

  async authenticate(req, res) {
    let { email, password } = req.body;

    const user = await User.findOne({ where: { email: email } });

    if (!user)
      return res.status(400).json({ error: "Usuário não encontrado !" });

    if (!(await bcrypt.compare(password, user.password)))
      return res.status(400).json({ error: "Senha incorreta ou invalida" });

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: 86400,
    });

    user.token = token;
    return res.json(user);
  },
};
