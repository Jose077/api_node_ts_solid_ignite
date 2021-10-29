import { DayjsDateProvider } from '@shared/container/provides/DateProvider/implementations/DayjsDateProvider';
import { IDateProvider } from '@shared/container/provides/DateProvider/IDateProvider';
import { container } from 'tsyringe';


container.registerSingleton<IDateProvider>(
    "DayjsDateProvider",
    DayjsDateProvider
)



