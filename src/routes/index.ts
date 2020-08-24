import { Router } from "express";
import brandRouter from "./brands.routes";
import modelRouter from "./models.routes";
import vehicleRouter from "./vehicles.routes";
import sessionsRouter from "./sessions.routes";
import adminsRouter from "./admins.routes";

const routes = Router();

routes.use("/api/brands", brandRouter);
routes.use("/api/models", modelRouter);
routes.use("/api/vehicles", vehicleRouter);
routes.use("/api/sessions", sessionsRouter);
routes.use("/api/admins", adminsRouter);

export default routes;
