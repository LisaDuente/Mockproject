import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Person } from '../entity/Person';
import { PersonDto } from './dto/addPerson.dto';

@Injectable()
export class PersonService {
  getAll() {
    return Person.find(); //SELECT * from Person
  }

  addTest(person: Person) {
    return Person.save(person);
  }
}
