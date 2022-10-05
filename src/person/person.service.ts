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
    return Person.findBy({birth_year: birthdate});
  }

  getByHomeworld(homeworld: string){
    return Person.findBy({homeworld: homeworld});
  }

  getByEyeColor(color: string){
    return Person.findBy({eye_color: color})
  }

  getByMass(mass: string){
    return Person.findBy({mass: mass})
  }

  getByHeight(height: string){
    return Person.findBy({height: height})
  }

  getByGender(gender: string){
    return Person.findBy({gender: gender})
  }

  getByHair(hair: string){
    return Person.findBy({hair_color: hair})
  }

  getBySkin(skin: string){
    return Person.findBy({skin_color: skin})
  }

  //this returns all people with blue eyes, all people with gender female.... but not all blue eyed females!
  async getByServeralParams(dto: GetPersonDto){
    let personList = [];
    if("name" in dto){
      for(let person of await Person.findBy({name: dto.name})){
        personList.push(person)
      }
    }

    if("gender" in dto){
      for(let person of await Person.findBy({gender: dto.gender})){
        personList.push(person)
      }
    }

    
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
