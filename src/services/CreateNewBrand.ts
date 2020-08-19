import { getCustomRepository } from "typeorm";
import Brand from "../models/Brand";
import BrandRepository from "../repositories/BrandRepository";

interface Request {
  name: string;
}

class CreateNewBrand {
  public async execute({ name }: Request): Promise<Brand> {
    const brandRepository = getCustomRepository(BrandRepository);

    const brand = brandRepository.create({
      name,
    });

    console.log("brand", brand);
    await brandRepository.save(brand);

    return brand;
  }
}

export default CreateNewBrand;
