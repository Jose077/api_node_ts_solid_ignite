import { IMailProvider } from '@shared/container/provides/MailProvider/IMailProvider';


class MailProviderInMemory implements IMailProvider {

    private message: any[] = [];

    async sendMail(to: string, subject: string, variable: any, path: string): Promise<void> {
        this.message.push({
            to,
            subject,
            variable,
            path

        })
    }

}

export { MailProviderInMemory }