import { Router } from "express";
import ensureAuthenticated from "../middlewares/EnsureAuthenticated";

import CreateNewVehicle from "../services/VehiclesServices/CreateNewVehicle";
import UpdateVehicle from "../services/VehiclesServices/UpdateVehicle";
import DeleteVehicle from "../services/VehiclesServices/DeleteVehicle";
import ListVehicles from "../services/VehiclesServices/ListVehicles";
import ListVehiclesByModel from "../services/VehiclesServices/ListVehiclesByModel";

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
  const listVehicles = new ListVehicles();

  const vehicle = await listVehicles.execute({
    id,
  });

  return response.json(vehicle);
});

vehicleRouter.get("/model/:model_id", async (request, response) => {
  const { model_id } = request.params;
  console.log("model_id", model_id);

  const listVehiclesByModel = new ListVehiclesByModel();

  const vehicles = await listVehiclesByModel.execute({ model_id });

  return response.json(vehicles);
});

export default vehicleRouter;
