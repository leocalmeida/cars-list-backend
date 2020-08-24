import { getRepository } from "typeorm";

import Brand from "../../models/Brand";
import Model from "../../models/Model";
import Vehicle from "../../models/Vehicle";

interface Request {
  id: string;
  value: number;
  brand_id: number;
  model_id: number;
  year_model: number;
  fuel: string;
}

class UpdateVehicle {
  public async execute({
    id,
    value,
    brand_id,
    model_id,
    year_model,
    fuel,
  }: Request): Promise<Vehicle> {
    const brandRepository = getRepository(Brand);
    const modelRepository = getRepository(Model);
    const vehicleRepository = getRepository(Vehicle);

    const brand = await brandRepository.findOne(brand_id);

    if (!brand) {
      throw new Error("Brand not found");
    }

    const model = await modelRepository.findOne(model_id);

    if (!model) {
      throw new Error("Model not found");
    }

    const vehicle = await vehicleRepository.findOne(id);

    if (!vehicle) {
      throw new Error("Vehicle not found");
    }

    vehicle.value = value;
    vehicle.brand_id = brand_id;
    vehicle.brand = brand;
    vehicle.model_id = model_id;
    vehicle.model = model;
    vehicle.year_model = year_model;
    vehicle.fuel = fuel;

    await vehicleRepository.save(vehicle);
    return vehicle;
  }
}

export default UpdateVehicle;
