import { Injectable } from '@nestjs/common';
import { Person } from '../entity/Person';
import { SwapiService } from '../swapi/swapi.service';
import { UpdatePerson } from './dto/updatePerson.dto';

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
    console.log(personArray)
    for(const person of personArray){
        Person.save({...person})
    }
    return "seeded"
  }
  
  update(id: number, updatePerson: Partial<UpdatePerson> ) {
    
    return Person.save({...updatePerson});
  }
}
