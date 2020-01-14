import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export default class Student {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    firstName: string;

    @Column()
    lastName: string;
}
