import { AppError } from './../../../../shared/errors/AppError';
import { UsersTokensRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersTokenRepositoryInMemory';
import { DayjsDateProvider } from '@shared/container/provides/DateProvider/implementations/DayjsDateProvider';
import { UserRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UserRepositoryInMemory';
import { SendForgotPasswordMailUseCase } from "./sendForgotPasswordMailUseCase";
import { MailProviderInMemory } from '@shared/container/provides/MailProvider/in-memory/MailProviderInMemory';
import { jest } from '@jest/globals'

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let usersRepositoryInMemory: UserRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let mailProvider: MailProviderInMemory;

describe(" Send forgot mail", () => {

    beforeEach(() => {
        usersRepositoryInMemory = new UserRepositoryInMemory();
        dateProvider = new DayjsDateProvider();
        usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
        mailProvider = new MailProviderInMemory();
                
        sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
            usersRepositoryInMemory,
            usersTokensRepositoryInMemory,
            dateProvider,
            mailProvider
        );
    });

    it("should be able to send a forgot password mail to user", async () => {
        const sendMail = jest.spyOn(mailProvider, "sendMail");

        await usersRepositoryInMemory.create({
            driver_licence: "54548",
            email: "test@email.com",
            name: "test",
            password: "1234"
        });

        await sendForgotPasswordMailUseCase.execute("test@email.com");

        expect(sendMail).toHaveBeenCalled()

    });

    it("should not be able to send an email if user does not exists", async () => {
        await expect(sendForgotPasswordMailUseCase.execute("naoexiste@email.com")).rejects.toEqual(new AppError("User does not exists!"))
    });

    it("should be able to create an users token", async () => {
        const generateTokenMail = jest.spyOn(usersRepositoryInMemory, "create");

        await usersRepositoryInMemory.create({
            driver_licence: "54548",
            email: "test2@email.com",
            name: "test",
            password: "1234"
        });

        await sendForgotPasswordMailUseCase.execute("test2@email.com");

        expect(generateTokenMail).toHaveBeenCalled()


    })



});