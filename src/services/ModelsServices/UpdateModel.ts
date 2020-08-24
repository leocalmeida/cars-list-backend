import { getRepository } from "typeorm";
import Brand from "../../models/Brand";
import Model from "../../models/Model";

interface Request {
  id: string;
  name: string;
  brand_id: number;
}

class UpdateModel {
  public async execute({ id, name, brand_id }: Request): Promise<Model> {
    const brandRepository = getRepository(Brand);
    const modelRepository = getRepository(Model);

    const brand = await brandRepository.findOne(brand_id);
    if (!brand) {
      throw new Error("Brand not found");
    }

    const model = await modelRepository.findOne(id);

    if (!model) {
      throw new Error("Model not found");
    }

    model.name = name;
    model.brand_id = brand_id;
    model.brand = brand;

    await modelRepository.save(model);

    return model;
  }
}

export default UpdateModel;
