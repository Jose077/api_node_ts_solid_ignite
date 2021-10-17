import { container } from 'tsyringe';
import { Request, Response} from "express"
import { ListRenstalByUserUseCase } from './ListRenstalByuserUseCase';


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