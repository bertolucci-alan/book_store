const { Model, DataTypes } = require("sequelize");

class Book extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        price: DataTypes.DOUBLE,
      },
      {
        sequelize: connection,
        tableName: "books",
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Owner, { foreignKey: "owner_id", as: "owner" });

    this.hasMany(models.Purchase, {
      foreignKey: "books",
      as: "booksPurchase",
    });
  }
}
module.exports = Book;
