import { container } from 'tsyringe';

import { Request, Response } from "express"
import { SendForgotPasswordMailUseCase } from './sendForgotPasswordMailUseCase';

class SendForgotPasswordMailController {
    async handle(req: Request, res: Response): Promise<Response> {
        
        const { email } = req.body;

        const sendForgotPasswordMailUseCase = container.resolve(SendForgotPasswordMailUseCase);

        await sendForgotPasswordMailUseCase.execute(email);

        return res.send()
    }


}

export { SendForgotPasswordMailController }