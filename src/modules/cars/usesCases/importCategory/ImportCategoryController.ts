import {Request, Response} from 'express'
import { container, injectable } from 'tsyringe';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';


@injectable()
class ImportCategoryController {

   async handle(req: Request, res: Response): Promise<Response> {
        //@ts-ignore
        const { file } = req;

        const importCategoryUseCase = container.resolve(ImportCategoryUseCase)

        await importCategoryUseCase.execute(file)

        return res.status(201).send();
    }
}

export { ImportCategoryController }