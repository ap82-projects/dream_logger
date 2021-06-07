// import * as express from "express";
// import * as cors from "cors";
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.DB_PORT || 9999

app.use(express.json());
app.use(cors());
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

app.get("/api/test_backend", async (req, res) => {
  res.send("Connected To Backend");
});
