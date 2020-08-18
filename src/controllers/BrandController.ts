import { Request, Response } from "express";
import connection from "../database/connection";

class BrandController {
  async create(request: Request, response: Response) {
    const { name: string } = request.body;

    const trx = await connection.transaction();

    const id = await trx("brands")
      .insert({ name: name }, "id")
      .then((id) => id[0]);

    await trx.commit();

    return response.json({
      id: id,
      name: name,
    });
  }

  async index(request: Request, response: Response) {
    const trx = await connection.transaction();
    const result = await trx("brands").select("*");

    return response.json(result);
  }
}

export default BrandController;
