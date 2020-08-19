import { Request, Response } from "express";
import Brand from "../models/Brand";
import connection from "../database/connection";

class BrandController {
  async create(request: Request, response: Response) {
    const brand = new Brand();
    brand.name = request.body.name;

    const trx = await connection.transaction();

    brand.id = await trx("brands")
      .insert({ name: brand.name }, "id")
      .then((id) => id[0]);

    await trx.commit();

    return response.json(brand);
  }

  async index(request: Request, response: Response) {
    const trx = await connection.transaction();
    const result: Brand[] = await trx("brands").select("*");

    return response.json(result);
  }
}

export default BrandController;
