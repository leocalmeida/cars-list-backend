import { Router } from "express";

import { getRepository } from "typeorm";

import CreateNewVehicle from "../services/CreateNewVehicle";
import Vehicle from "../models/Vehicle";

const vehicleRouter = Router();

vehicleRouter.post("/", async (request, response) => {
  const { value, brand_id, model_id, year_model, fuel } = request.body;

  const createNewVehicle = new CreateNewVehicle();

  const vehicle = await createNewVehicle.execute({
    value,
    brand_id,
    model_id,
    year_model,
    fuel,
  });

  return response.json(vehicle);
});

vehicleRouter.get("/", async (request, response) => {
  const vehicleRepository = getRepository(Vehicle);
  const vehicles = await vehicleRepository.find();

  return response.json(vehicles);
});
export default vehicleRouter;
