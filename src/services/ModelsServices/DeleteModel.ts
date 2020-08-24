import { getRepository } from "typeorm";
import Model from "../../models/Model";

interface Request {
  id: string;
}

class DeleteModel {
  public async execute({ id }: Request): Promise<Model> {
    const modelRepository = getRepository(Model);

    const model = await modelRepository.findOne(id);

    if (!model) {
      throw new Error("Model not found");
    }

    await modelRepository.delete(model);

    return model;
  }
}

export default DeleteModel;
