const { Model, DataTypes } = require("sequelize");
const Client = require("./Client");

class AddressClient extends Model {
  static init(connection) {
    super.init(
      {
        zipcode: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.NUMBER,
      },
      {
        sequelize: connection,
        tableName: "addresses_client",
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.AddressClient, {
      foreignKey: "client_id",
      as: "client",
    });
  }
}

module.exports = AddressClient;
