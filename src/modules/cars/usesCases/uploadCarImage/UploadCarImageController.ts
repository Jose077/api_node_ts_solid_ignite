import { container } from 'tsyringe';
import {  Request, Response } from "express"
import { UploadCarImageUseCase } from './UploadCarImageUseCase';


interface IFiles {
    filename: string
}

class UploadCarsImageController {
    async handle( req: Request, res: Response ): Promise<Response> {
        const { id } = req.params;
        const images = req.files as IFiles[]

        const uploadCarImagesUseCase = container.resolve(UploadCarImageUseCase)

        const images_name = images.map((file) => file.filename);

        await uploadCarImagesUseCase.execute({
            car_id: id,
            images_name
        })

        return res.status(201).send();
    }
} 

export { UploadCarsImageController }