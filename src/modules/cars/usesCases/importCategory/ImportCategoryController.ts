import {Request, Response} from 'express'
import { ImportCategoryUseCase } from './importCategoryUseCase';

class ImportCategoryController {
    constructor(private importCategoryUseCase: ImportCategoryUseCase){}
    handle( req: Request, res: Response): Response {
        //@ts-ignore
        const { file } = req;

        this.importCategoryUseCase.execute(file)

        return res.send();
    }
}

export { ImportCategoryController }