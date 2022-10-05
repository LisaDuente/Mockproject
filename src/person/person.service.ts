import { Injectable } from '@nestjs/common';
import { toNamespacedPath } from 'path';
import { DataSource } from 'typeorm';
import { Person } from '../entity/Person';
import { SwapiService } from '../swapi/swapi.service';
import { PersonDto } from './dto/addPerson.dto';
import { GetPersonDto } from './dto/getPerson.dto';

@Injectable()
export class PersonService {
    constructor(private swapiService: SwapiService){}
    
  //added a sort inside of this
  getAll() {
    return Person.find({order: {
      id: "DESC"
    }}); //SELECT * from Person
  }

  getById(id: number){
    return Person.findBy({id: id});
  }

  getByName(name: string){
    return Person.findBy({name: name});
  }

  getByBirthDate(birthdate: string){
    return Person.findByBirthday(birthdate);
  }

  getByHomeworld(homeworld: string){
    return Person.findByHomeworld(homeworld);
  }

  getByEyeColor(color: string){
    return Person.findByEyeColor(color)
  }

  getByMass(mass: string){
    return Person.findByMass(mass)
  }

  getByHeight(height: string){
    return Person.findByHeight(height)
  }

  getByGender(gender: string){
    return Person.findByGender(gender)
  }

  getByHair(hair: string){
    return Person.findByHair(hair)
  }

  getBySkin(skin: string){
    return Person.findBySkin(skin)
  }

  //this returns all people with blue eyes, all people with gender female.... but not all blue eyed females!
  async getByServeralParams(dto: GetPersonDto){
    let personList = [];
    if("name" in dto){
      for(let person of await Person.findBy({name: dto.name})){
        personList.push(person)
      }
    }

    if("birth_year" in dto){
      for(let person of await Person.findByBirthday(dto.birth_year)){
        personList.push(person)
      }
    }

    if("eye_color" in dto){
      for(let person of await Person.findByEyeColor(dto.eye_color)){
        personList.push(person)
      }
    }

    if("gender" in dto){
      for(let person of await Person.findByGender(dto.gender)){
        personList.push(person)
      }
    }

    return personList
  }


  addTest(person: Person) {
    return Person.save({...person});
  }

  async seedDatabase(){
    let personArray = await this.swapiService.getAllPersons();
    console.log(personArray)
    for(const person of personArray){
        Person.save({...person})
    }
    return "seeded"
  }
  
}
