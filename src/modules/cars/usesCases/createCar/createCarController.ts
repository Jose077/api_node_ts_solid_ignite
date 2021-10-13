import { resolve } from 'path';
import { Request , Response} from "express"
import { CreateCarUseCase } from "./CreateCarUseCase";
import { container } from 'tsyringe';

class CreateCarController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { 
            brand,
            category_id,
            daily_rate,
            description,
            fine_amount,
            licence_plate,
            name
         } = req.body;
         
         const createCarUseCase = container.resolve(CreateCarUseCase)

         const car = await createCarUseCase.execute({
            brand,
            category_id,
            daily_rate,
            description,
            fine_amount,
            licence_plate,
            name
         });

         return res.status(201).json(car)
    }
}

export { CreateCarController }