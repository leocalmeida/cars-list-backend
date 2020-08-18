import { Router } from "express";

import BrandController from "../controllers/BrandController";
const brandController = new BrandController();

const routes = Router();

routes.post("/api/brands", brandController.create);
routes.get("/api/brands", brandController.index);

export default routes;
