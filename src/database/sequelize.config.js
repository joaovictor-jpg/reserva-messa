import "ts-node/register";
import configs from "../configs.ts";

module.exports = {
  username: configs.DB_USERNAME,
  password: configs.DB_PASSWORD,
  database: configs.DB_DATABASE,
  host: configs.DB_HOST,
  dialect: "PostgresDialect",
  port: 5432
};