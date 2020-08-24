import { getRepository } from "typeorm";

import Vehicle from "../../models/Vehicle";

interface Request {
  id: string;
}

class DeleteVehicle {
  public async execute({ id }: Request): Promise<Vehicle> {
    const vehicleRepository = getRepository(Vehicle);

    const vehicle = await vehicleRepository.findOne(id);

    if (!vehicle) {
      throw new Error("Vehicle not found");
    }

    await vehicleRepository.delete(vehicle);
    return vehicle;
  }
}

export default DeleteVehicle;
