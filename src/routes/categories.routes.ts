import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/usesCases/createCategory';
import { CreateCategoryUseCase } from '../modules/cars/usesCases/createCategory/CreateCategoryUseCase';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (req,res) => {
    return createCategoryController.handle(req, res);
})

categoriesRoutes.get('/', (req,res) => {
   const listCategories = categoriesRepository.list();

   return res.status(200).send(listCategories);
})

export { categoriesRoutes }