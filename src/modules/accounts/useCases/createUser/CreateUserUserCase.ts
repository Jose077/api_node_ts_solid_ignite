import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt"
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";


@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ) { }

    async execute({ driver_licence, email, name, password }: ICreateUserDTO): Promise<void> {

        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if(userAlreadyExists){
            throw new AppError("User already exists");
        }

        const passwordHash = await hash(password, 8)

        await this.userRepository.create({
            driver_licence, 
            email,
            name, 
            password: passwordHash
        })
    }
}

export { CreateUserUseCase }