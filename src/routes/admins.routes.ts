import { Router } from "express";
import { getRepository } from "typeorm";
import Admin from "../models/Admin";
import CreateAdminService from "../services/AdminServices/CreateAdminService";

const adminsRouter = Router();

adminsRouter.post("/", async (request, response) => {
  try {
    const { email, password } = request.body;

    const createAdminService = new CreateAdminService();

    // const response =
    const admins = await createAdminService.execute({
      email,
      password,
    });
    return response.json(admins);
  } catch (error) {
    throw new Error(error);
  }
});

adminsRouter.get("/", async (request, response) => {
  const adminRepository = getRepository(Admin);
  const admins = await adminRepository.find({
    order: {
      id: "ASC",
    },
  });
  return response.json(admins);
});

export default adminsRouter;
