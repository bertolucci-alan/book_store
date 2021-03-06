const { Model, DataTypes } = require("sequelize");
const AddressOwner = require("./Address_Owner");

class Owner extends Model {
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
        tableName: "owner",
      }
    );
    return this;
  }
  static associate(models) {
    this.hasMany(models.Address_Owner, {
      foreignKey: "owner_id",
      as: "addressesOwner",
    });
    this.hasMany(models.Book, { foreignKey: "owner_id", as: "books" });
  }
}

module.exports = Owner;
