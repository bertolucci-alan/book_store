const Client = require("../models/Client");
const Address_Client = require("../models/Address_Client");

module.exports = {
  //-------------CREATE--------------//

  async store(req, res) {
    const { client_id } = req.params;

    const client = await Client.findByPk(client_id);

    if (!client) {
      res.status(400).json({ error: "Client not found!" });
    }

    const { zipcode, street, number } = req.body;

    const address_client = await Address_Client.create({
      zipcode,
      street,
      number,
      client_id,
    });

    return res.json(address_client);
  },

  //-------------UPDATE--------------//

  async update(req, res) {
    const { client_id } = req.params;

    const client = await Client.findByPk(client_id);

    if (!client) {
      res.status(400).json({ error: "Client not found!" });
    }
    const { addresses_client_id } = req.params;

    const address_client = await Address_Client.findByPk(addresses_client_id);

    if (!address_client) {
      res.status(400).json({ error: "Address not found!" });
    }

    address_client.update(req.body);

    return res.json(address_client);
  },

  //-------------INDEX--------------//

  async index(req, res) {
    const { client_id } = req.params;

    const client = await Client.findByPk(client_id, {
      include: { association: "addressesClient" },
    });

    if (!client) {
      res.status(400).json({ error: "Client not found!" });
    }

    return res.json(client.addressesClient);
  },

  //-------------DETAIL--------------//

  async detail(req, res) {
    const { addresses_client_id } = req.params;
    const { client_id } = req.params;

    const client = await Client.findByPk(client_id);

    if (!client) {
      res.status(400).json({ error: "Client not found!" });
    }

    const address_client = await Address_Client.findByPk(addresses_client_id);

    return res.json(address_client);
  },

  //-------------DELETE--------------//

  async destroy(req, res) {
    const { addresses_client_id } = req.params;
    const { client_id } = req.params;

    const client = await Client.findByPk(client_id);

    if (!client) {
      res.status(400).json({ error: "Client not found!" });
    }

    const address_client = await Address_Client.findByPk(addresses_client_id);

    if (!address_client) {
      res.status(400).json({ error: "Address not found!" });
    }

    address_client.destroy(req.body);
    return res.json();
  },
};
