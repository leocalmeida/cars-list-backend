import { getRepository } from "typeorm";
import Brand from "../../models/Brand";

interface Request {
  name: string;
}

class CreateNewBrand {
  public async execute({ name }: Request): Promise<Brand> {
    const brandRepository = getRepository(Brand);

    const brand = brandRepository.create({
      name,
    });

    await brandRepository.save(brand);

    return brand;
  }
}

export default CreateNewBrand;
