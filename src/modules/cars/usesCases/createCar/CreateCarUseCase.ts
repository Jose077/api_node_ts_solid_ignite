import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";


interface IRequest {
    name: string;
    description: string;
    daily_rate: number;
    licence_plate: string;
    fine_amount: number;
    brand: string;
    category_id: string;
}


// @injectable()
class CreateCarUseCase {
    constructor(
        // @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ){}

    async execute({ 
        name, 
        description, 
        daily_rate, 
        licence_plate, 
        category_id,
        fine_amount, 
        brand
    }: IRequest): Promise<void> {

        this.carsRepository.create({
            name, 
            description, 
            daily_rate, 
            licence_plate, 
            category_id,
            fine_amount, 
            brand 
        })

    }

}

export { CreateCarUseCase }