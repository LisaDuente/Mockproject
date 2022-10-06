
import { ForbiddenException, Injectable } from '@nestjs/common';
import { DataSource, Like, QueryBuilder, QueryFailedError } from 'typeorm';
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

  getBySpecies(species: string){
    return Person.findBy({
      species: species,
    })
  }

  getByFilm(film: string){
    return Person.findBy({
      films: Like(`%${film}%`),
    })
  }

  getByVehicle(vehicle: string){
    return Person.findBy({
      vehicles: Like(`%${vehicle}%`),
    })
  }

  getByStarship(starship: string){
    return Person.findBy({
      starships: Like(`%${starship}%`),
    })
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
    return Person.save({ ...person });
  }


  async seedDatabase() {
    const personArray = await this.swapiService.getAllPersons();

    let person;

    for (let i = 0; i < personArray.length; i++) {
      person = await Person.createQueryBuilder()
        .select('person')
        .from(Person, 'person')
        .where('person.name = :id', { id: personArray[i].name })
        .getOne();
      if (person === null) {
        await Person.save(personArray[i]);
      }
    }

    return Person.find();
  }

  // Deletes a row chosen by unique id
  async deleteOne(id: number) {
     await Person
      .createQueryBuilder()
      .delete()
      .from(Person)
      .where('id = :id', {id: id})
      .execute()
  }

  async deleteAll() {
    const dbToDelete = await Person.find()
    for(let i = 0; i < dbToDelete.length; i++) {
    await Person
        .createQueryBuilder()
        .delete()
        .from(Person)
        .where('id = :id', {id: dbToDelete[i].id})
        .execute()
    }
  }

  async createPersonWithoutLinks(person: PersonDto){
    let homeworld: string;
    let films = [];
    let species = []
    let vehicles = []
    let starships = []

    homeworld = await this.swapiService.getByPath(person.homeworld)
    if(person.films.length > 0){
      for(let path of person.films){
        films.push(
          await this.swapiService.getByPath(path)
        )
      }
    }
  
    if(person.species.length > 0){
      for(let path of person.species){
        species.push(
          await this.swapiService.getByPath(path)
        )
      }
    }
   
    if(person.vehicles.length > 0){
      for(let path of person.vehicles){
        vehicles.push(
          await this.swapiService.getByPath(path)
        )
      }
    }
   
    if(person.starships.length > 0){
      for(let path of person.starships){
        starships.push(
          await this.swapiService.getByPath(path)
        )
      }
    }
  
    person.homeworld = homeworld;
    person.species = species.toString();
    person.vehicles = vehicles.toString();
    person.starships = starships.toString();
    person.films = films.toString();

    Person.save({...person})

    return person;
  }

  async seedDatabaseWithoutLinks(){
    let personArray = await this.swapiService.getAllPersons();
    for(const person of personArray){
        this.createPersonWithoutLinks(person)
    }
    return "seeded"
  }



  
  // "Flags" a row to make it unusable
  // async softDelete (id: number) {
  //   const deleteResponse = await this.personRepository.softDelete({id: id});
  //     if(!deleteResponse.affected) {
  //       throw new console.error(id);
  //     }
  //   //  await Person
  //   //   .getRepository()
  //   //   .createQueryBuilder()
  //   //   .softDelete()
  //   //   .where('id = :id', {id: id})
  //   //   .execute()
  // }

  // // Restores a "flaged" row back to usable
  // async restoreSoftDelete (id: number) {
  //   await Person
  //     .getRepository()
  //     .createQueryBuilder()
  //     .restore()
  //     .where('id = :id', {id: id})
  //     .execute()
  // }
  
}
