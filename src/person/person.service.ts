import { ForbiddenException, Injectable } from '@nestjs/common';
import { DataSource, QueryBuilder, QueryFailedError } from 'typeorm';
import { Person } from '../entity/Person';
import { SwapiService } from '../swapi/swapi.service';
import { PersonDto } from './dto/addPerson.dto';

@Injectable()
export class PersonService {
  constructor(private swapiService: SwapiService) {}
  getAll() {
    return Person.find(); //SELECT * from Person
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
}
