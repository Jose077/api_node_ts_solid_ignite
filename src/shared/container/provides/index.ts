import "dotenv/config"
import { IStorageProvider } from '@shared/container/provides/StorageProvider/IStorageProvider';
import { IMailProvider } from '@shared/container/provides/MailProvider/IMailProvider';
import { DayjsDateProvider } from '@shared/container/provides/DateProvider/implementations/DayjsDateProvider';
import { container } from "tsyringe"

import { IDateProvider } from "./DateProvider/IDateProvider";
import { EtherealMailProvider } from './MailProvider/implementations/EtherealMailProvider';
import { LocalStorageProvider } from './StorageProvider/implementations/LocalStorageProvider';
import { S3StorageProvider } from './StorageProvider/implementations/S3StorageProvider';

container.registerSingleton<IDateProvider>(
    "DayjsDateProvider",
    DayjsDateProvider
)

container.registerInstance<IMailProvider>(
    "EtherealMailProvider",
    new EtherealMailProvider()
)

const diskStorage = {
    local: LocalStorageProvider,
    s3: S3StorageProvider
}

container.registerSingleton<IStorageProvider>(
    "StorageProvider",
    diskStorage[process.env.disk]
)