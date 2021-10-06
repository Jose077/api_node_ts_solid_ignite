import { CreateCarController } from "@modules/cars/usesCases/createCar/createCarController";
import { Router } from "express"

const carsRouter = Router();

const createCarController = new CreateCarController();

carsRouter.post("/", createCarController.handle)

export { carsRouter }