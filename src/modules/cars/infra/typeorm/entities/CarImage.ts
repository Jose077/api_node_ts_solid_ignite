import { CreateDateColumn } from 'typeorm';
import { Column, Entity, PrimaryColumn } from 'typeorm';


@Entity("cars_image")
class CarImage {

    @PrimaryColumn()
    id: string;

    @Column()
    car_id: string;

    @CreateDateColumn()
    created_at: Date;
} 

export { CarImage }