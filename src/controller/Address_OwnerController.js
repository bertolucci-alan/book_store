const Address_Owner = require("../models/Address_Owner");
const Owner = require("../models/Owner");

module.exports = {
  //-------------CREATE--------------//

  async store(req, res) {
    const { zipcode, street, number } = req.body;
    const { owner_id } = req.params;
    //return res.json(owner_id);

    const owner = await Owner.findByPk(owner_id);

    if (!owner) {
      res.status(400).json({ error: "Owner not found!" });
    }

    const address_owner = await Address_Owner.create({
      zipcode,
      street,
      number,
      owner_id,
    });

    return res.json(address_owner);
  },

  //-------------UPDATE--------------//

  async update(req, res) {
    const { owner_id } = req.params;
    const { addresses_owner_id } = req.params;

    const owner = await Owner.findByPk(owner_id);

    if (!owner) {
      res.status(400).json({ error: "Owner not found!" });
    }

    const address_owner = await Address_Owner.findByPk(addresses_owner_id);

    if (!address_owner) {
      res.status(400).json({ error: "Address not found!" });
    }

    address_owner.update(req.body);

    return res.json(address_owner);
  },

  //-------------INDEX--------------//

  async index(req, res) {
    const { owner_id } = req.params;

    const owner = await Owner.findByPk(owner_id, {
      include: { association: "addressesOwner" },
    });

    if (!owner) {
      res.status(400).json({ error: "Owner not found!" });
    }

    return res.json(owner.addressesOwner);
  },

  //-------------DETAIL--------------//
  async detail(req, res) {
    const { owner_id } = req.params;
    const { addresses_owner_id } = req.params;

    const owner = await Owner.findByPk(owner_id);

    if (!owner) {
      res.status(400).json({ error: "Owner not found!" });
    }

    const address_owner = await Address_Owner.findByPk(addresses_owner_id);

    if (!address_owner) {
      res.status(400).json({ error: "Address not found!" });
    }

    return res.json(address_owner);
  },

  //-------------DESTROY--------------//
  async destroy(req, res) {
    const { owner_id } = req.params;
    const { addresses_owner_id } = req.params;

    const owner = await Owner.findByPk(owner_id);

    if (!owner) {
      res.status(400).json({ error: "Owner not found!" });
    }

    const addresses_owner = await Address_Owner.findByPk(addresses_owner_id);

    if (!address_owner) {
      res.status(400).json({ error: "Address not found!" });
    }

    addresses_owner.destroy(req.body);

    return res.json();
  },
};
