import { Router } from "express";

import { getRepository } from "typeorm";

import CreateNewModel from "../services/CreateNewModel";
import Model from "../models/Model";

const modelRouter = Router();

modelRouter.post("/", async (request, response) => {
  const { name, brand_id } = request.body;

  const createNewModel = new CreateNewModel();

  const model = await createNewModel.execute({
    name,
    brand_id,
  });

  return response.json(model);
});

modelRouter.put("/:id", async (request, response) => {});
modelRouter.delete("/:id", async (request, response) => {});
modelRouter.get("/:id", async (request, response) => {});

modelRouter.get("/", async (request, response) => {
  const modelRepository = getRepository(Model);
  const models = await modelRepository.find();

  return response.json(models);
});
export default modelRouter;
