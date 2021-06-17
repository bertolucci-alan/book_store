const Book = require("../models/Book");
const Purchase = require("../models/Purchase");
const Client = require("../models/Client");
const Owner = require("../models/Owner");

module.exports = {
  //------------CREATE-----------//
  async store(req, res) {
    const { books, client } = req.body;

    const purchase = await Purchase.create({ books, client });

    return res.json(purchase);
  },

  //------------INDEX-----------//
  async index(req, res) {
    const purchase = await Purchase.findAll({
      include: [
        {
          model: Book,
          as: "booksP",
          attributes: ["name", "price", "owner_id"],
          include: [
            {
              model: Owner,
              as: "owner",
              attributes: ["name", "surname"],
            },
          ],
        },
        {
          model: Client,
          as: "clientP",
          attributes: ["name", "surname"],
        },
      ],
    });
    return res.json(purchase);
  },

  //------------DETAIL-----------//
  async detail(req, res) {
    const { purchases_id } = req.params;

    const purchase = await Purchase.findByPk(purchases_id, {
      include: [
        {
          model: Book,
          as: "booksP",
          attributes: ["name", "price", "owner_id"],
          include: [
            {
              model: Owner,
              as: "owner",
              attributes: ["name", "surname"],
            },
          ],
        },
        {
          model: Client,
          as: "clientP",
          attributes: ["name", "surname"],
        },
      ],
    });

    if (!purchase) {
      res.status(400).json({ error: "Purchase not found!" });
    }

    return res.json(purchase);
  },

  //------------DETAIL-----------//
  async destroy(req, res) {
    const { purchases_id } = req.params;

    const purchase = await Purchase.findByPk(purchases_id);

    if (!purchase) {
      res.status(400).json({ error: "Purchase not found!" });
    }

    purchase.destroy(req.body);
    return res.json();
  },
};
