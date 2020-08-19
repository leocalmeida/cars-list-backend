import { Router } from "express";
import brandRouter from "./brands.routes";

const routes = Router();

routes.use("/api/brands", brandRouter);

export default routes;
