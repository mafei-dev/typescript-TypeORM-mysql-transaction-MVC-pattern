import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export default class School {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;
}
