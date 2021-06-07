const express = require("express");
const cors = require("cors");
const { createConnection, getRepository } = require("typeorm");
const dbConfig = require("./ormconfig");
import { Request, response, Response } from 'express';
import { Like } from 'typeorm';
import { Dream } from "./entities/DreamsModel";

const app = express();
const port = process.env.SERVER_PORT || 9999
app.use(express.json());
app.use(cors());
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
createConnection(dbConfig);

app.get("/api/test_backend", async (req: Request, res: Response) => {
  res.send("Connected To Backend");
});

app.get("/api/test_database", async (req: Request, res: Response) => {
  try {
    await getRepository(Dream).find();
    return res.json("Connected to database.");
  } catch(err) {
    console.log(err);
    res.json("Cannot connect to database.");
  }
});

app.get("/api/dreams", async (req: Request, res: Response) => {
  const reply = await getRepository(Dream).find();
  return res.json(reply);
});

app.get("/api/dreams/:id", async (req: Request, res: Response) => {
  const reply = await getRepository(Dream).findOne(req.params)
  return res.json(reply);
})

app.get("/api/dreams/date/:date", async (req: Request, res: Response) => {
  const reply = await getRepository(Dream).find({date: Like(`%${req.params.date}%`)});
  return res.json(reply);
});

app.get("/api/dreams/lucid/:bool", async (req: Request, res: Response) => {
  const reply = await getRepository(Dream).find({was_lucid: req.params.bool})
  return res.json(reply);
});

app.get("/api/dreams/nightmare/:bool", async (req: Request, res: Response) => {
  const reply = await getRepository(Dream).find({was_nightmare: req.params.bool})
  return res.json(reply);
});

app.get("/api/dreams/summary/:word", async (req: Request, res: Response) => {
  const reply = await getRepository(Dream).find({summary: Like(`%${req.params.word}%`)});
  return res.json(reply);
});

app.get("/api/dreams/description/:word", async (req: Request, res: Response) => {
  const reply = await getRepository(Dream).find({description: Like(`%${req.params.word}%`)});
  return res.json(reply);
});

app.get("/api/dreams/meal/:meal", async (req: Request, res: Response) => {
  const reply = await getRepository(Dream).find({last_meal_before_bed: Like(`%${req.params.meal}%`)});
  return res.json(reply);
});

app.get("/api/dreams/activity/:activity", async (req: Request, res: Response) => {
  const reply = await getRepository(Dream).find({last_activity_before_bed: Like(`%${req.params.activity}%`)});
  return res.json(reply);  
});

app.get("/api/dreams/keyword/:word", async (req: Request, res: Response) => {
  const reply = await getRepository(Dream).find({where: [
    { summary: Like(`%${req.params.word}%`) },
    { description: Like(`%${req.params.word}%`) },
    { last_meal_before_bed: Like(`%${req.params.word}%`) },
    { last_activity_before_bed: Like(`%${req.params.word}%`) }
  ]});
  return res.json(reply);
});

app.post("/api/dreams", async (req: Request, res: Response) => {
  const reply = await getRepository(Dream).save(req.body);
  return res.json(reply);
});

app.put("/api/dreams/:id", async (req: Request, res: Response) => {
  const reply = await getRepository(Dream).update(req.params.id, req.body);
  return res.json(reply);
})

app.delete("/api/dreams/:id", async (req: Request, res: Response) => {
  const reply = await getRepository(Dream).delete(req.params.id);
  return reply.affected ? res.sendStatus(200) : res.sendStatus(404);
})
