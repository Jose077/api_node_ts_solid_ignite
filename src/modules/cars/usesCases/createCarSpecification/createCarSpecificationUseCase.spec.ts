import { SpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository';
import { AppError } from '@shared/errors/AppError';
import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { CreateCarSpecificationUseCase } from "./createCarSpecificationUseCase"
import { SpecificationInMemory } from '@modules/cars/repositories/in-memory/SpecificationInMemory';

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationInMemory;


describe("Create car specification", () => {

    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        specificationsRepositoryInMemory = new SpecificationInMemory(); 
        createCarSpecificationUseCase = new CreateCarSpecificationUseCase(carsRepositoryInMemory, specificationsRepositoryInMemory);

    })

    it("Shold not be able to add a new specification to a now-existent car" , async () => {
        const car_id = "1234";
        const specifications_id = ["54321"]

        await expect(
             createCarSpecificationUseCase.execute({ car_id, specifications_id})
        ).rejects.toEqual(new AppError("Car does not exists!"));


    });

    it("Shold be able to add a new specification to car" , async () => {

        const car = await carsRepositoryInMemory.create({
            name: "car 1",
            description: "description",
            daily_rate: 100,
            licence_plate: "licence_plate",
            category_id: "category_id",
            fine_amount: 60,
            brand: "brand"
        });

        const specification = await specificationsRepositoryInMemory.create({
            description: "test",
            name: "test"
        })

        const specifications_id = [specification.id];

        const specificationsCars = await createCarSpecificationUseCase.execute({ car_id: car.id, specifications_id});

        expect(specificationsCars).toHaveProperty("specifications");

    })
})