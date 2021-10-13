import multer from "multer"
import { CreateCarController } from "@modules/cars/usesCases/createCar/createCarController";
import { CreateCarSpecificationController } from "@modules/cars/usesCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "@modules/cars/usesCases/listAvailableCars/listAvailableCarsController";
import { UploadCarsImageController } from "@modules/cars/usesCases/uploadCarImage/UploadCarImageController";
import { Router } from "express"
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import uploadConfig from "../../../../config/upload"



const carsRouter = Router();

const listAvailableCarsController = new ListAvailableCarsController()
const createCarController = new CreateCarController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarsImageController();

const upload = multer(uploadConfig.upload("./tmp/cars"));



carsRouter.post("/", ensureAuthenticated, ensureAdmin, createCarController.handle)
carsRouter.get("/available" , listAvailableCarsController.handle);
carsRouter.post("/specifications/:id", ensureAuthenticated, ensureAdmin, createCarSpecificationController.handle);
carsRouter.post("/images/:id", ensureAuthenticated, ensureAdmin, upload.array("images"), uploadCarImagesController.handle)

export { carsRouter }