import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.DBPORT,
  dialect: dbConfig.DIALECT,
  logging: false,
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection Successfully");
  } catch (error) {
    console.log("Unable to connot Connet to the database error");
  }
};

testConnection();
export default sequelize;
