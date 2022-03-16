const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

const Actor = sequelize.define("actor", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  raiting: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  profilePic: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(10),
    defaultValue: true,
    allowNull: false,
  },
});

module.exports = { Actor };