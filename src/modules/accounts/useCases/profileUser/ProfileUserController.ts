import { container } from 'tsyringe';
import { Request, Response} from "express"
import { ProfileUserUseCase } from './ProfileUserUseCase';


class ProfileUserController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const profileUserUseCase = container.resolve(ProfileUserUseCase);

        const user = await profileUserUseCase.execute(id);

        res.json(user)
    }
}

export { ProfileUserController }