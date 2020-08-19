import { Router } from "express";
import { getCustomRepository } from "typeorm";

import BrandRepository from "../repositories/BrandRepository";
import CreateNewBrand from "../services/CreateNewBrand";

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
  const brandRepository = getCustomRepository(BrandRepository);
  const brands = await brandRepository.find();

  return response.json(brands);
});

export default brandRouter;
