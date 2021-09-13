import { compare } from "bcrypt"
import { inject, injectable } from "tsyringe";
import { sign } from "jsonwebtoken"

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    },
    token: string
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({email, password} : IRequest): Promise<IResponse>{
        const user = await this.usersRepository.findByEmail(email)

        if(!user){
            console.log("nao achei o user");
            
            throw new AppError("Email or password incorrect!");
        }

        const passwordMatch = await compare(password, user.password);

        //Senha esta correta
        if(!passwordMatch) {

            throw new AppError("Email or password incorrect!");
        }

        const token = sign({}, "fcac8d15d4d184621103c4427fb88d25", { subject: user.id, expiresIn: "1d" });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return tokenReturn
    }
}

export { AuthenticateUserUseCase }