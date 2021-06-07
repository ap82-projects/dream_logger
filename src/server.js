const express = require("express");
const cors = require("cors");
const knex = require("./knex");
const { createConnection } = require("typeorm");
const dbConfig = require("./ormconfig");
// import { createConnection } from "typeorm";
// import dbConfig from "./ormconfig"

const app = express();
const port = process.env.SERVER_PORT || 9999

app.use(express.json());
app.use(cors());
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

app.get("/api/test_backend", async (req, res) => {
  res.send("Connected To Backend");
});

app.get("/api/test_database", async (req, res) => {
  try {
    await createConnection(dbConfig)
    res.send("Connected to database.");
  } catch(err) {
    console.log(err);
    res.send("Cannot connect to database.");
  }
});
