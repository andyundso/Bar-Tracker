import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export default class Bar extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // SOURCE: https://github.com/typeorm/typeorm/issues/2896
    @Column({
        type: 'point',
        transformer: {
            from: v => v, // good as-is
            to: v => `${v.x},${v.y}`, // { x: 1, y: 2 } -> '1,2'
        },
    })
    public coordinates: IPoint;
}
