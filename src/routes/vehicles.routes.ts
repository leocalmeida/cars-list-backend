import { Router } from "express";
import { getRepository } from "typeorm";
import ensureAuthenticated from "../middlewares/EnsureAuthenticated";

import CreateNewVehicle from "../services/VehiclesServices/CreateNewVehicle";
import UpdateVehicle from "../services/VehiclesServices/UpdateVehicle";
import DeleteVehicle from "../services/VehiclesServices/DeleteVehicle";

import Vehicle from "../models/Vehicle";

const vehicleRouter = Router();

vehicleRouter.post("/", ensureAuthenticated, async (request, response) => {
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

vehicleRouter.patch("/:id", ensureAuthenticated, async (request, response) => {
  const { id } = request.params;
  const { value, brand_id, model_id, year_model, fuel } = request.body;
  const updateVehicle = new UpdateVehicle();
  const vehicle = await updateVehicle.execute({
    id,
    value,
    brand_id,
    model_id,
    year_model,
    fuel,
  });
  return response.json(vehicle);
});

vehicleRouter.delete("/:id", ensureAuthenticated, async (request, response) => {
  const { id } = request.params;
  const deleteVehicle = new DeleteVehicle();

  const vehicle = await deleteVehicle.execute({
    id,
  });
  response.json(vehicle);
});

vehicleRouter.get("/:id", ensureAuthenticated, async (request, response) => {
  const { id } = request.params;
  const vehicleRepository = getRepository(Vehicle);

  const vehicle = await vehicleRepository.findOne(id);

  return response.json(vehicle);
});

vehicleRouter.get("/", async (request, response) => {
  const vehicleRepository = getRepository(Vehicle);
  const vehicles = await vehicleRepository.find({
    order: {
      id: "ASC",
    },
  });

  return response.json(vehicles);
});

export default vehicleRouter;
