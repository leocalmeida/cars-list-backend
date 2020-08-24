import { getRepository } from "typeorm";
import Brand from "../../models/Brand";

interface Request {
  id: string;
  name: string;
}

class UpdateBrand {
  public async execute({ id, name }: Request): Promise<Brand> {
    const brandRepository = getRepository(Brand);
    const brand = await brandRepository.findOne(id);

    if (!brand) {
      throw new Error("Brand not found");
    }
    brand.name = name;
    await brandRepository.save(brand);

    return brand;
  }
}

export default UpdateBrand;
