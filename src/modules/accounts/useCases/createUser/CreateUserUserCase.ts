import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";


@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ) { }

    async execute({ driver_licence, email, name, password }: ICreateUserDTO): Promise<void> {

        await this.userRepository.create({
            driver_licence, email, name, password
        })
    }
}

export { CreateUserUseCase }