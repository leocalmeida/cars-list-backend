import dotenv from "dotenv";
import "reflect-metadata";

import express from "express";
import routes from "./routes";

import "./database";

const app = express();

app.use(express.json());
app.use(routes);

dotenv.config();

app.listen(process.env.PORT || 3333, () => {
  console.log("Server started");
});
