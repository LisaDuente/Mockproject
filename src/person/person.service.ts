import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Person } from '../entity/Person';
import { SwapiService } from '../swapi/swapi.service';
import { PersonDto } from './dto/addPerson.dto';

@Injectable()
export class PersonService {
    constructor(private swapiService: SwapiService){}
  getAll() {
    return Person.find(); //SELECT * from Person
  }

  addTest(person: Person) {
    return Person.save({...person});
  }

  async seedDatabase(){
    let personArray = await this.swapiService.getAllPersons();
    /*for(const person of personArray){
        Person.save({...person})
    }*/
  }
}
