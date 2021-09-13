import { Category } from "@modules/cars/entities/Category";
import { ICategoriesRespository } from "@modules/cars/repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class ListCategoriesUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRespository
    ){}

   async execute(): Promise<Category[]>{
        const categories = await this.categoriesRepository.list();

        return categories;
    }
}

export { ListCategoriesUseCase }