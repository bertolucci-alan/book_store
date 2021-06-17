const { Op } = require("sequelize");

const Address_Owner = require("../models/Address_Owner");
const Owner = require("../models/Owner");
const Book = require("../models/Book");

//listando owners com cep 17400-000
//desses owners, listar seus produtos que estão abaixo de um valor estipulado na url do relatório

module.exports = {
  async show(req, res) {
    const { addresses_id } = req.params;

    const owner = await Owner.findAll({
      attributes: ["name", "surname"],
      include: [
        {
          model: Address_Owner,
          as: "addressesOwner",
          where: { zipcode: "17400-000" },
        },

        {
          model: Book,
          as: "books",
          required: true,
          where: {
            price: {
              [Op.lt]: req.query.price,
            },
          },
        },
      ],
    });
    return res.json(owner);
  },
};
