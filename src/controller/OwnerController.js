const Owner = require("../models/Owner");

module.exports = {
  async store(req, res) {
    const { name, surname, age, email, phone } = req.body;
    const owner = await Owner.create({ name, surname, age, email, phone });
    return res.json(owner);
  },
  async update(req, res) {
    const { name, surname, age, email, phone } = req.body;
    const { owner_id } = req.params;
    const owner = await Owner.findByPk(owner_id);

    if (!owner) {
      res.status(400).json({ error: "Owner not found!" });
    }

    owner.update(req.body);
    return res.json(owner);
  },
  async index(req, res) {
    const owner = await Owner.findAll();
    return res.json(owner);
  },
  async detail(req, res) {
    const { owner_id } = req.params;
    const owner = await Owner.findByPk(owner_id);
    if (!owner) {
      res.status(400).json({ error: "Owner not found!" });
    }
    return res.json(owner);
  },
  async destroy(req, res) {
    const { owner_id } = req.params;
    const owner = await Owner.findByPk(owner_id);
    if (!owner) {
      res.status(400).json({ error: "Owner not found!" });
    }
    owner.destroy(req.body);
    return res.json();
  },
};
