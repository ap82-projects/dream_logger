const express = require("express");
const cors = require("cors");
const { createConnection } = require("typeorm");
const dbConfig = require("./ormconfig");
import { Request, Response } from 'express';

const app = express();
const port = process.env.SERVER_PORT || 9999

app.use(express.json());
app.use(cors());
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

app.get("/api/test_backend", async (req: Request, res: Response) => {
  res.send("Connected To Backend");
});

app.get("/api/test_database", async (req: Request, res: Response) => {
  try {
    await createConnection(dbConfig)
    res.send("Connected to database.");
  } catch(err) {
    console.log(err);
    res.send("Cannot connect to database.");
  }
});
