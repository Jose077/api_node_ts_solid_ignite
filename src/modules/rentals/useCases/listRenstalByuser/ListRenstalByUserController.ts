import { container } from 'tsyringe';
import { ListRenstalByUserUseCase } from './ListRenstalByuserUseCase';
import { Request, Response} from "express"


class ListRenstalByUserController {

    async handle(req: Request, res: Response) {

        const { id } = req.user;

        const listRenstalByUserUseCase = container.resolve(
            ListRenstalByUserUseCase
        );

        const rentals = await listRenstalByUserUseCase.execute(id);

        return res.json(rentals);
    }

}

export { ListRenstalByUserController }