import { Router } from "express";
import { getRepository } from "typeorm";
import ensureAuthenticated from "../middlewares/EnsureAuthenticated";

import CreateNewModel from "../services/ModelsServices/CreateNewModel";
import UpdateModel from "../services/ModelsServices/UpdateModel";
import DeleteModel from "../services/ModelsServices/DeleteModel";

import Model from "../models/Model";

const modelRouter = Router();

modelRouter.post("/", ensureAuthenticated, async (request, response) => {
  const { name, brand_id } = request.body;

  const createNewModel = new CreateNewModel();

  const model = await createNewModel.execute({
    name,
    brand_id,
  });

  return response.json(model);
});

modelRouter.patch("/:id", ensureAuthenticated, async (request, response) => {
  const { id } = request.params;
  const { name, brand_id } = request.body;
  const updateModel = new UpdateModel();
  const model = await updateModel.execute({
    id,
    name,
    brand_id,
  });
  return response.json(model);
});

modelRouter.delete("/:id", ensureAuthenticated, async (request, response) => {
  const { id } = request.params;
  const deleteModel = new DeleteModel();
  const excludedModel = await deleteModel.execute({
    id,
  });

  return response.json(excludedModel);
});

modelRouter.get("/:id", ensureAuthenticated, async (request, response) => {
  const { id } = request.params;
  const modelRepository = getRepository(Model);
  const models = await modelRepository.find({
    where: {
      id,
    },
    order: {
      id: "ASC",
    },
  });

  return response.json(models);
});

modelRouter.get("/", async (request, response) => {
  const modelRepository = getRepository(Model);
  const models = await modelRepository.find({
    order: {
      id: "ASC",
    },
  });

  return response.json(models);
});

export default modelRouter;
