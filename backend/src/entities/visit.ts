import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Bar from "./bar";

@Entity()
export default class Visit extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'date'})
    date: string;

    @ManyToOne(type => Bar, bar => bar.visits)
    bar: Bar;
}
