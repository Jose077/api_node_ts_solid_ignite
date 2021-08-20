import { container } from "tsyringe";
import { ICategoriesRespository } from "../../modules/cars/repositories/ICategoriesRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepository";



container.registerSingleton<ICategoriesRespository>(
    "CategoriesRepository", CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository", SpecificationsRepository
);