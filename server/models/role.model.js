import { DataTypes } from "sequelize";
import sequelize from "./db.js";

const Role = sequelize.define("role", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  roleName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Role;
