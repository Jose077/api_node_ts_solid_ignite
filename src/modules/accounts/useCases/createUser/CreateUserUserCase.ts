import { inject } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";


class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ) { }

    async execute({ driver_licence, email, name, password, username }: ICreateUserDTO): Promise<void> {

        await this.userRepository.create({
            driver_licence, email, name, password, username
        })
    }
}

export { CreateUserUseCase }