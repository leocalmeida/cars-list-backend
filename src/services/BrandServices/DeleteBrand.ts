import { getRepository } from "typeorm";
import Brand from "../../models/Brand";

interface Request {
  id: string;
}

class DeleteBrand {
  public async execute({ id }: Request): Promise<Brand> {
    const brandRepository = getRepository(Brand);
    const brand = await brandRepository.findOne(id);

    if (!brand) {
      throw new Error("brand does not exist");
    }

    await brandRepository.delete(brand);

    return brand;
  }
}

export default DeleteBrand;
