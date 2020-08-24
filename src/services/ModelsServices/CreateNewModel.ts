import { getRepository } from "typeorm";
import Model from "../../models/Model";
import Brand from "../../models/Brand";

interface Request {
  name: string;
  brand_id: number;
}

class CreateNewModel {
  public async execute({ name, brand_id }: Request): Promise<Model> {
    const modelRepository = getRepository(Model);
    const brandRepository = getRepository(Brand);

    const brand = await brandRepository.findOne(brand_id);

    const model = modelRepository.create({
      name,
      brand_id,
      brand,
    });

    await modelRepository.save(model);

    return model;
  }
}

export default CreateNewModel;
