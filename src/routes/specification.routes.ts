import { Router } from 'express'
import { SpecificationRepository } from '../modules/cars/repositories/implementations/SpecificationRepository';
import { CreateSpecificationController } from '../modules/cars/usesCases/createSpecification/CreateSpecificationController';

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController()

const specificationsRepository = new SpecificationRepository();

specificationRoutes.post('/', createSpecificationController.handle)

export { specificationRoutes }