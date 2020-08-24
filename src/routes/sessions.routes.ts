import { Router } from "express";
import AuthenticateAdminService from "../services/AdminServices/AuthenticateAdminService";

const sessionsRouter = Router();

sessionsRouter.post("/", async (request, response) => {
  try {
    const { email, password } = request.body;
    const authenticateAdminService = new AuthenticateAdminService();

    // const response =
    const { admin, token } = await authenticateAdminService.execute({
      email,
      password,
    });

    delete admin.password;

    return response.json({ admin, token });
  } catch (error) {
    throw new Error(error);
  }
});

export default sessionsRouter;
