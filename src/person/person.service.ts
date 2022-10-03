import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Person } from '../entity/Person';
import { PersonDto } from './dto/addPerson.dto';

@Injectable()
export class PersonService {

constructor(private dataSource: DataSource) {
    
}

    getAll(){
        return this.dataSource.manager.find(Person); //SELECT * from Person
    }

    addTest(person: Person){
        return this.dataSource.manager.save(person);
    }
}
