import express from "express";
import images from "./imagesRoutes/image";
const routes = express.Router();

routes.use("/images", images);

export default routes;
