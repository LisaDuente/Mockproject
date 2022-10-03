import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name : string

    @Column()
    birth_year: string

    @Column()
    eye_color: string
    
    @Column()
    gender: string

    @Column()
    hair_color: string

    @Column()
    height: string
    
    @Column()
    mass: string

    @Column()
    skin_color: string

    @Column()
    homeworld: string
    
    @Column()
    films: string []

    @Column()
    species: string []
    
    @Column()
    starships: string []

    @Column()
    vehicles: string []

    @Column()
    url: string
    
    @Column()
    created: string
    
    @Column()
    edited : string
}
