import { getRepository } from "typeorm";

import Brand from "../../models/Brand";
import Model from "../../models/Model";
import Vehicle from "../../models/Vehicle";

interface Request {
  value: number;
  brand_id: number;
  model_id: number;
  year_model: number;
  fuel: string;
}

class CreateNewVehicle {
  public async execute({
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
    const model = await modelRepository.findOne(model_id);

    const vehicle = vehicleRepository.create({
      value,
      brand_id,
      brand,
      model_id,
      model,
      year_model,
      fuel,
    });

    await vehicleRepository.save(vehicle);
    return vehicle;
  }
}

export default CreateNewVehicle;
