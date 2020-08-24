import { Router } from "express";
import { getRepository } from "typeorm";
import ensureAuthenticated from "../middlewares/EnsureAuthenticated";

import CreateNewBrand from "../services/BrandServices/CreateNewBrand";
import UpdateBrand from "../services/BrandServices/UpdateBrand";
import DeleteBrand from "../services/BrandServices/DeleteBrand";

import Brand from "../models/Brand";

const brandRouter = Router();

brandRouter.post("/", ensureAuthenticated, async (request, response) => {
  const { name } = request.body;

  const createNewBrand = new CreateNewBrand();

  const brand = await createNewBrand.execute({
    name,
  });
  return response.json(brand);
});

brandRouter.patch("/:id", ensureAuthenticated, async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  // const teste = Number(id);

  const updateBrand = new UpdateBrand();
  const brand = await updateBrand.execute({
    id,
    name,
  });

  return response.json(brand);
});

brandRouter.delete("/:id", ensureAuthenticated, async (request, response) => {
  const { id } = request.params;
  const deleteBrand = new DeleteBrand();

  const brand = await deleteBrand.execute({
    id,
  });
  return response.json(brand);
});

brandRouter.get("/:id", ensureAuthenticated, async (request, response) => {
  const { id } = request.params;

  const brandRepository = getRepository(Brand);
  const brand = await brandRepository.findOne(id);

  return response.json(brand);
});

brandRouter.get("/", async (request, response) => {
  const brandRepository = getRepository(Brand);
  const brands = await brandRepository.find({
    order: {
      id: "ASC",
    },
  });

  return response.json(brands);
});

export default brandRouter;
