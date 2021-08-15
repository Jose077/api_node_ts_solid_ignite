import { Router } from 'express'
import { SpecificationRepository } from '../modules/cars/repositories/implementations/SpecificationRepository';
import { createSpecificationController } from '../modules/cars/usesCases/createSpecification';

const specificationRoutes = Router();

const specificationsRepository = new SpecificationRepository()

specificationRoutes.post('/', (req, res) => {
    createSpecificationController.handle(req, res);

    res.status(201).send()
});

export { specificationRoutes }