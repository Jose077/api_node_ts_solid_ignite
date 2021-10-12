import { Router } from 'express'
import multer from "multer"
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

import { CreateCategoryController } from '../../../../modules/cars/usesCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../../../../modules/cars/usesCases/importCategory/ImportCategoryController';
import { ListCategoriesController } from '../../../../modules/cars/usesCases/listCategories/ListCategoriesController';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const categoriesRoutes = Router();

categoriesRoutes.use(ensureAuthenticated)

const upload = multer({
    dest: "./tmp"
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post('/', ensureAuthenticated, ensureAdmin, createCategoryController.handle);

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post("/import", ensureAuthenticated, ensureAdmin, upload.single("file"), importCategoryController.handle);

export { categoriesRoutes }