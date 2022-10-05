
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Person extends BaseEntity {
  constructor() {
    super();
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  birth_year: string;

  @Column()
  eye_color: string;

  @Column()
  gender: string;

  @Column()
  hair_color: string;

  @Column()
  height: string;

  @Column()
  mass: string;

  @Column()
  skin_color: string;

  @Column()
  homeworld: string;

  @Column()
  films: string;

  @Column()
  species: string;

  @Column()
  starships: string;

  @Column()
  vehicles: string;

  @Column()
  url: string;

  @Column()
  created: string;

  @Column()
  edited: string;

  static findByBirthday(birthDate: string) {
    return this.createQueryBuilder("person")
        .where("person.birth_year = :birth_year", { birth_year: birthDate })
        .getMany()
  }

  static findByHomeworld(homeworld: string){
    return this.createQueryBuilder("person")
    .where("person.homeworld = :homeworld", {homeworld: homeworld})
    .getMany()
  }

  static findByEyeColor(color: string){
    return this.createQueryBuilder("person")
    .where("person.eye_color = :eye_color", {eye_color: color})
    .getMany()
  }

  static findByMass(mass: string){
    return this.createQueryBuilder("person")
    .where("person.mass = :mass", {mass: mass})
    .getMany()
  }

  static findByHeight(height: string){
    return this.createQueryBuilder("person")
    .where("person.height = :height", {height: height})
    .getMany()
  }

  static findByGender(gender: string){
    return this.createQueryBuilder("person")
    .where("person.gender = :gender", {gender: gender})
    .getMany()
  }

  static findByHair(hair: string){
    return this.createQueryBuilder("person")
    .where("person.hair_color = :hair_color", {hair_color: hair})
    .getMany()
  }

  static findBySkin(skin: string){
    return this.createQueryBuilder("person")
    .where("person.skin_color = :skin_color", {skin_color: skin})
    .getMany()
  }



  
}
