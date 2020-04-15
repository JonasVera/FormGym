const Goal = require("../models/Goal");

module.exports = {
  async index(req, res) {
    const { id_user } = req.params;
    const goal = await Goal.findAll({ where: { id_user: id_user } });

    return res.json(goal);
  },
  async store(req, res) {
    const {
      name,
      description,
      goal,
      date_limit,
      current_weight,
      weigth_goal,
      status,
    } = req.body;

    const { id_user } = req.params;

    let objgoal = await Goal.findOne({ where: { name: name } });

    // VERIFICA A INEXISTENCIA DE UM EXERCICIO
    if (objgoal) return res.status(400).json({ error: "Objetivo já existe !" });

    objgoal = await Goal.create({
      name,
      description,
      goal,
      date_limit,
      current_weight,
      weigth_goal,
      status,
      id_user,
    });

    return res.json(objgoal);
  },
  async delete(req, res) {
    const { id } = req.body;
    const { id_user } = req.params;
    let objgoal = await Goal.findOne({ where: { id: id, id_user: id_user } });

    if (!objgoal) return res.status(400).json({ error: "Objetivo não existe" });

    objgoal = await Goal.destroy({ where: { id: id, id_user: id_user } });
    return res.json(objgoal);
  },
  async update(req, res) {
    const {
      id,
      name,
      description,
      goal,
      date_limit,
      current_weight,
      weigth_goal,
      status,
    } = req.body;

    const { id_user } = req.params;

    let objgoal = await Goal.findOne({
      where: { id: id, id_user: id_user },
    });

    if (!objgoal)
      return res.status(400).json({ error: "Objetivo não existe !" });

    objgoal = await Goal.update(
      {
        name,
        description,
        goal,
        date_limit,
        current_weight,
        weigth_goal,
        status,
      },
      { where: { id_user: id_user, id: id } }
    );
    return res.json(objgoal);
  },
  async updateStatus(req, res) {
    const { id, current_weight, status } = req.body;

    const { id_user } = req.params;

    let objgoal = await Goal.findOne({
      where: { id: id, id_user: id_user },
    });

    if (!objgoal)
      return res.status(400).json({ error: "Objetivo não existe !" });

    objgoal = await Goal.update(
      {
        current_weight,
        status,
      },
      { where: { id_user: id_user, id: id } }
    );
    return res.json(objgoal);
  },
};
