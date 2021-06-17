const { Model, DataTypes } = require("sequelize");

class Client extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        surname: DataTypes.STRING,
        age: DataTypes.INTEGER,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
      },
      {
        sequelize: connection,
        tableName: "client",
      }
    );
  }
  static associate(models) {
    this.hasMany(
      models.AddressClient,
      {
        foreignKey: "client_id",
        as: "addressesClient",
      },
      this.hasMany(models.Purchase, {
        foreignKey: "client",
        as: "clientPurchase",
      })
    );
  }
}
module.exports = Client;
