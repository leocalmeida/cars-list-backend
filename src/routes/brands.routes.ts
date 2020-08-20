import { Router } from "express";
import { getRepository } from "typeorm";

import CreateNewBrand from "../services/CreateNewBrand";
import Brand from "../models/Brand";

const brandRouter = Router();

brandRouter.post("/", async (request, response) => {
  const { name } = request.body;

  const createNewBrand = new CreateNewBrand();

  const brand = await createNewBrand.execute({
    name,
  });
  return response.json(brand);
});

brandRouter.get("/", async (request, response) => {
  const brandRepository = getRepository(Brand);
  const brands = await brandRepository.find();

  return response.json(brands);
});

export default brandRouter;
