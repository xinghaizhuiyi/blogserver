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
    bowen: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "bowen"
    }
  };
  const options = {
    tableName: "bowen",
    comment: "",
    indexes: []
  };
  const BowenModel = sequelize.define("bowen_model", attributes, options);
  return BowenModel;
};