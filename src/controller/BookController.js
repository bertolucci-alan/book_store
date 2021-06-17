const Book = require("../models/Book");

const Owner = require("../models/Owner");

module.exports = {
  //-------------CREATE--------------//

  async store(req, res) {
    const { name, price } = req.body;
    const { owner_id } = req.params;
    const owner = await Owner.findByPk(owner_id);

    if (!owner) {
      res.status(400).json({ error: "Owner not found!" });
    }
    const books = await Book.create({ name, price, owner_id });
    return res.json(books);
  },

  //-------------UPDATE--------------//
  async update(req, res) {
    const { books_id } = req.params;
    const { owner_id } = req.params;

    const owner = await Owner.findByPk(owner_id);

    if (!owner) {
      res.status(400).json({ error: "Owner not found!" });
    }

    const book = await Book.findByPk(books_id);

    if (!book) {
      res.status(400).json({ error: "Book not found!" });
    }

    book.update(req.body);
    return res.json(book);
  },

  //-------------INDEX--------------//
  async index(req, res) {
    const { owner_id } = req.params;

    const owner = await Owner.findByPk(owner_id, {
      include: { association: "books" },
    });

    if (!owner) {
      res.status(400).json({ error: "Owner not found!" });
    }

    return res.json(owner.books);
  },

  //-------------DETAIL--------------//
  async detail(req, res) {
    const { owner_id } = req.params;
    const { books_id } = req.params;

    const owner = await Owner.findByPk(owner_id);

    if (!owner) {
      res.status(400).json({ error: "Owner not found!" });
    }

    const book = await Book.findByPk(books_id);

    if (!book) {
      res.status(400).json({ error: "Book not found!" });
    }

    return res.json(book);
  },

  //-------------DESTROY--------------//
  async destroy(req, res) {
    const { owner_id } = req.params;
    const { books_id } = req.params;

    const owner = await Owner.findByPk(owner_id);

    if (!owner) {
      res.status(400).json({ error: "Owner not found!" });
    }

    const book = await Book.findByPk(books_id);

    if (!book) {
      res.status(400).json({ error: "Book not found!" });
    }

    book.destroy(req.body);

    return res.json();
  },
};
