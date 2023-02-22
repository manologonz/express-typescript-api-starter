import {Column, Entity, EntitySchema, PrimaryGeneratedColumn} from "typeorm";
import db from "../../db";

export interface IWelcome {
    id: number;
    message: string;
}
@Entity()
export class Welcome implements IWelcome{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    message!: string
}
