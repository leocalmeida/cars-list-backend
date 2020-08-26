import { getRepository } from "typeorm";

import Vehicle from "../../models/Vehicle";

interface Request {
  model_id: string;
}

class ListVehiclesByModel {
  public async execute({ model_id }: Request): Promise<Vehicle[]> {
    const vehicleRepository = getRepository(Vehicle);
    const vehicles = await vehicleRepository
      .createQueryBuilder("vehicles")
      .innerJoinAndSelect("vehicles.brand", "brand")
      .innerJoinAndSelect("vehicles.model", "model")
      .select([
        "vehicles.id",
        "vehicles.value",
        "vehicles.year_model",
        "vehicles.fuel",
      ])
      .addSelect(["brand.name"])
      .addSelect(["model.name"])
      .where("vehicles.model_id = :model_id", { model_id })
      .getMany();

    return vehicles;
  }
}

export default ListVehiclesByModel;
