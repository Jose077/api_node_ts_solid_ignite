import { AppError } from './../../../../shared/errors/AppError';
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase"


let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemoey = new CarsRepositoryInMemory()

describe("Create Car", () => {
    beforeEach(() => {
        carsRepositoryInMemoey = new CarsRepositoryInMemory()
        createCarUseCase = new CreateCarUseCase(carsRepositoryInMemoey);

    })

    it("shold be able to create a new car", async () => {
        const car = await createCarUseCase.execute({
            name: "name",
            description: "description",
            daily_rate: 100,
            licence_plate: "licence_plate",
            category_id: "category_id",
            fine_amount: 60,
            brand: "brand"
        });

        expect(car).toHaveProperty("id");

    })

    it("shold not be able to create a car with exists licence plate", () => {

        expect(async () => {
            await createCarUseCase.execute({
                name: "car 1",
                description: "description",
                daily_rate: 100,
                licence_plate: "licence_plate",
                category_id: "category_id",
                fine_amount: 60,
                brand: "brand"
            });

            await createCarUseCase.execute({
                name: "car 2",
                description: "description",
                daily_rate: 100,
                licence_plate: "licence_plate",
                category_id: "category_id",
                fine_amount: 60,
                brand: "brand"
            });

        }).rejects.toBeInstanceOf(AppError)

    })

    it("shold not be able to create a car with available true by default", async () => {

        const car = await createCarUseCase.execute({
            name: "car 1",
            description: "description",
            daily_rate: 100,
            licence_plate: "ABCD-1234",
            category_id: "category_id",
            fine_amount: 60,
            brand: "brand"
        });

        expect(car.available).toBe(true)
        
    })

})