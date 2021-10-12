import { CreateCarController } from "@modules/cars/usesCases/createCar/createCarController";
import { ListAvailableCarsController } from "@modules/cars/usesCases/listAvailableCars/listAvailableCarsController";
import { Router } from "express"
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const carsRouter = Router();

const listAvailableCarsController = new ListAvailableCarsController()

const createCarController = new CreateCarController();

carsRouter.post("/", ensureAuthenticated, ensureAdmin, createCarController.handle)

carsRouter.get("/available" , listAvailableCarsController.handle);

export { carsRouter }