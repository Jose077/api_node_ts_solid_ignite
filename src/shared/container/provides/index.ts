import { DayjsDateProvider } from '@shared/container/provides/DateProvider/implementations/DayjsDateProvider';
import { container } from "tsyringe"

import { IDateProvider } from "./DateProvider/IDateProvider";

container.registerSingleton<IDateProvider>(
    "DayjsDateProvider",
    DayjsDateProvider
)