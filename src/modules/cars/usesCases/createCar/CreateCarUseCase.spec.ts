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
        await createCarUseCase.execute({
            name: "name", 
            description: "description", 
            daily_rate: 100, 
            licence_plate: "licence_plate", 
            category_id: "category_id",
            fine_amount: 60, 
            brand: "brand"
        });

    })

})