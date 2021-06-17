const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const connection = new Sequelize(dbConfig);

const Owner = require("../models/Owner");
const Client = require("../models/Client");
const Address_Owner = require("../models/Address_Owner");
const Address_Client = require("../models/Address_Client");
const Book = require("../models/Book");
const Purchase = require("../models/Purchase");

Owner.init(connection);
Address_Owner.init(connection);

Client.init(connection);
Address_Client.init(connection);

Book.init(connection);

Purchase.init(connection);

Owner.associate(connection.models);
Address_Owner.associate(connection.models);
Book.associate(connection.models);

Client.associate(connection.models);
Address_Client.associate(connection.models);

Purchase.associate(connection.models);

module.exports = connection;
