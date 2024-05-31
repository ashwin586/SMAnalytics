import pg from "pg";
const Client = pg.Client;

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

client
  .connect()
  .then(() => console.log("Connected to postgreSQL"))
  .catch((err) => console.log(err));

export default client;
