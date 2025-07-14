import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  loging: false,
});

testConnection = async () => {
  try {
    await sequelize.authentyon();
    console.log("Connection Successfully");
  } catch (error) {
    console.log("Unable to connot Connet to the database error");
  }
};

testConnection();
module.exports = sequelize;
