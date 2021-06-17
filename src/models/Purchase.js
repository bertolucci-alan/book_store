const { Model, DataTypes } = require("sequelize");

class Purchase extends Model {
  static init(connection) {
    super.init(
      {},
      {
        sequelize: connection,
        tableName: "purchases",
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Book, { foreignKey: "books", as: "booksP" });
    this.belongsTo(models.Client, { foreignKey: "client", as: "clientP" });
  }
}

module.exports = Purchase;
