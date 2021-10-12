import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { ListAvailableCarsUseCase } from "./listAvailableCarsUseCase"

let listAvailableCarsUseCase: ListAvailableCarsUseCase;

let carsRepositoryInMemory: CarsRepositoryInMemory;


describe("List Cars", () => {

    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory)
    })

    it(" shold be able to list all available cars", async () => {

        const car = await carsRepositoryInMemory.create({
            brand: "Audi",
            category_id: "category_id",
            daily_rate: 140.00,
            description: "Carro de burgues",
            fine_amount: 100,
            licence_plate: "DEF-1212",
            name: "Audi rei delas"

        })

        const cars = await listAvailableCarsUseCase.execute({});
        
        expect(cars).toEqual([car])
    })

    it("shold be able to list all available cars by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            brand: "Car_brand_test",
            category_id: "category_id",
            daily_rate: 140.00,
            description: "Carro de burgues",
            fine_amount: 100,
            licence_plate: "DEF-1212",
            name: "Audi rei delas"

        })
        
        const cars = await listAvailableCarsUseCase.execute({brand: "Car_brand_test"});
        
        expect(cars).toEqual([car])
    })

    it("shold be able to list all available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            brand: "Car_brand_test",
            category_id: "category_id",
            daily_rate: 140.00,
            description: "Carro de burgues",
            fine_amount: 100,
            licence_plate: "DEF-1212",
            name: "Audi rei delas full plus plus"

        })
        
        const cars = await listAvailableCarsUseCase.execute({name: "Audi rei delas full plus plus"});
        
        expect(cars).toEqual([car])
    })

    it("shold be able to list all available cars by category_id", async () => {
        const car = await carsRepositoryInMemory.create({
            brand: "Car_brand_test",
            category_id: "123456",
            daily_rate: 140.00,
            description: "Carro de burgues",
            fine_amount: 100,
            licence_plate: "DEF-1212",
            name: "Audi rei delas full plus plus"

        })
        
        const cars = await listAvailableCarsUseCase.execute({category_id: "123456"});
        
        expect(cars).toEqual([car])
    })
})