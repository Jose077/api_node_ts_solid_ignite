import { Request, Response } from "express";
import { container } from "tsyringe"
import { CreateUserUseCase } from "./CreateUserUserCase"

class CreateUserController {

    async handle(req: Request, res: Response): Promise<Response>{

        const { driver_licence, email, name, password } = req.body;
        
        const createUserUseCase = container.resolve(CreateUserUseCase);

        await createUserUseCase.execute({driver_licence, email, name, password});

        return res.status(201).send()
    }

}

export { CreateUserController }