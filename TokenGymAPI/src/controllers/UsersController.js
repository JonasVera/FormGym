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
    let status = "ativo";
    password = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password,
      status,
      type_user,
    });

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: 86400,
    });
    user.token = token;

    return res.json(user);
  },

  async register(req, res) {
    // FINALIZAR O CADASTRO DO USUARIO
    let {
      id,
      name,
      email,
      sex,
      height,
      weigth,
      status,
      category,
      respiratory_problem,
      date_of_birth,
    } = req.body;
    user = await User.findByPk(id);

    if (!user) {
      return res.status(400).json({ error: "Usuário não existe !" });
    } else {
      date_of_birth = new Date(date_of_birth);

      height = parseInt(height);
      weigth = parseInt(weigth);
      user = await User.update(
        {
          name,
          email,
          sex,
          height,
          weigth,
          status,
          category,
          respiratory_problem,
          date_of_birth,
        },
        {
          where: { id: id },
        }
      );
      return res.json(user);
    }
  },
  async updatePassword(req, res) {
    let { id, password } = req.body;

    let user = await User.findByPk(id);
    if (!user) return res.status(401).json({ error: "Usuario não existe !" });

    password = await bcrypt.hash(password, 10);
    console.log(password);
    user = await User.update(
      {
        password,
      },
      {
        where: { id: id },
      }
    );
    return res.json(user);
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
