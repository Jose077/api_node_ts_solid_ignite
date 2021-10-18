import { IMailProvider } from '@shared/container/provides/MailProvider/IMailProvider';
import { DayjsDateProvider } from '@shared/container/provides/DateProvider/implementations/DayjsDateProvider';
import { container } from "tsyringe"

import { IDateProvider } from "./DateProvider/IDateProvider";
import { EtherealMailProvider } from './MailProvider/implementations/EtherealMailProvider';

container.registerSingleton<IDateProvider>(
    "DayjsDateProvider",
    DayjsDateProvider
)

container.registerInstance<IMailProvider>(
    "EtherealMailProvider",
    new EtherealMailProvider()
)