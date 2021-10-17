import { AppError } from "@shared/errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { UserRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUserCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"

let authenticateUserUseCase: AuthenticateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {

    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(userRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    })

    it("shold be able to authenticate an user", async () => {
        const user: ICreateUserDTO = {
            driver_licence: "000201",
            email: "test@email.com",
            name: "User test",
            password: "1234"
        }

        await createUserUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password,
        });

        expect(result).toHaveProperty("token");
        
    })


    it("Shold not be able to authenticate an nonexistent user", async () => {
       await expect( authenticateUserUseCase.execute({
                password: "123456",
                email: "inexistent@email.com"
            })
        ).rejects.toEqual(new AppError("Email or password incorrect!"));
    })

    it("shold not be able to authenticate with incorrect password", async () => {
        const user: ICreateUserDTO = {
            driver_licence: "9999",
            email: "user@email.com",
            password: "1234",
            name: "User Test Error"
        };

        await createUserUseCase.execute(user);

        await expect( authenticateUserUseCase.execute({
                email: user.email,
                password: "IncorrectPassword",
            })
        ).rejects.toEqual(new AppError("Email or password incorrect!"));
    })

});