const Client = require("../models/Client");

module.exports = {
  async store(req, res) {
    const { name, surname, age, email, phone } = req.body;

    const client = await Client.create({ name, surname, age, email, phone });

    return res.json(client);
  },
  async update(req, res) {
    const { name, surname, age, email, phone } = req.body;
    const { client_id } = req.params;

    const client = await Client.findByPk(client_id);
    if (!client) {
      res.status(400).json({ error: "Client not found!" });
    }
    client.update(req.body);

    return res.json(client);
  },
  async index(req, res) {
    const client = await Client.findAll();
    return res.json(client);
  },
  async detail(req, res) {
    const { client_id } = req.params;

    const client = await Client.findByPk(client_id);

    if (!client) {
      res.status(400).json({ error: "Client not found!" });
    }
    return res.json(client);
  },
  async destroy(req, res) {
    const { client_id } = req.params;
    const client = await Client.findByPk(client_id);
    if (!client) {
      res.status(400).json({ error: "Client not found!" });
    }
    client.destroy(req.body);
    return res.json();
  },
};
