const { Model, DataTypes } = require("sequelize");
const Owner = require("./Owner");

class Address_Owner extends Model {
  static init(connection) {
    super.init(
      {
        zipcode: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
      },
      {
        sequelize: connection,
        tableName: "addresses_owner",
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Owner, {
      foreignKey: "owner_id",
      as: "owner",
    });
  }
}

module.exports = Address_Owner;
