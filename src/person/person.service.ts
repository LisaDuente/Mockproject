import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from '../entity/Person';
import { SwapiService } from '../swapi/swapi.service';
import { PersonDto } from './dto/addPerson.dto';

@Injectable()
export class PersonService {
    constructor(
      private swapiService: SwapiService,
      // @InjectRepository(Person)
      // private personRepository: Repository<Person>
      ){}
      
  getAll() {
    return Person.find(); //SELECT * from Person
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

    return 'Database deleted'
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
