const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    tag: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "tag"
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "quantity"
    }
  };
  const options = {
    tableName: "blogtag",
    comment: "",
    indexes: []
  };
  const BlogtagModel = sequelize.define("blogtag_model", attributes, options);
  return BlogtagModel;
};