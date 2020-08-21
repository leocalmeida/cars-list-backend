import { Router } from "express";
import brandRouter from "./brands.routes";
import modelRouter from "./models.routes";
import vehicleRouter from "./vehicles.routes";

const routes = Router();

routes.use("/api/brands", brandRouter);
routes.use("/api/models", modelRouter);
routes.use("/api/vehicles", vehicleRouter);

export default routes;
