//ตรงนี้จะเป็นไลบรารีชื่อ "sequelize" ที่ใช้สำหรับเชื่อมต่อกับฐานข้อมูล 
//ตรง import คือตัวแปรที่ตั้งชื่อ
import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST, // ที่อยู่เซิร์ฟเวอร์ฐานข้อมูล (เช่น localhost หรือ IP)
  port: dbConfig.PORT,
  dialect: dbConfig.DIALECT,//ประเภทฐานข้อมูล เช่น mysql, postgres,
  logging: false,//ปิดการแสดงผล log คำสั่ง SQL ในคอนโซล เพื่อให้ไม่แสดงข้อมูลเยอะเกินไป
 dialectOptions: dbConfig.SSL
    ? { ssl: { require: true, rejectUnauthorized: false } }
    : {}, // ถ้า DB_SSL=false จะไม่ใช้ SSL

});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been etablished successfully");
  } catch (error) {
    console.log("Unable to connect to the database", error);
  }
};

testConnection();
export default sequelize;
