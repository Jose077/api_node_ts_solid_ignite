import { IDateProvider } from '@shared/container/provides/DateProvider/IDateProvider';
import { AppError } from './../../../../shared/errors/AppError';
import { IUsersTokenRepository } from '@modules/accounts/repositories/IUsersTokenRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';
import { v4 as uuidv4 } from "uuid"


@injectable()
class SendForgotPasswordMailUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,

        @inject("UsersTokensRepository")
        private UsersTokensRepository: IUsersTokenRepository,

        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider
    ) {}

    async execute(email: string) {

        const user = await this.usersRepository.findByEmail(email);

        if(!user){
            throw new AppError("User does not exists!")
        }

        const token = uuidv4();

        const expires_date = this.dateProvider.addHours(3);

        await this.UsersTokensRepository.create({
            refresh_token: token,
            user_id: user.id,
            expires_date
        })

    }
}

export { SendForgotPasswordMailUseCase }