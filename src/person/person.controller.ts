import { Body, Controller, Get, Post } from '@nestjs/common';
import { PersistedEntityNotFoundError } from 'typeorm';
import { Person } from '../entity/Person';
import { PersonDto } from './dto/addPerson.dto';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {

    constructor(private service: PersonService){}
    
    @Get("getAll")
    getAll(){
        return this.service.getAll();
    }

    @Post("test")
    test(){
        let person = new Person()
        person.id = 1;
        person.name = "dgfsjdfg";
        person.birth_year = "ksjfhakd"
        person.eye_color = "jsgdjasgd"
        person.gender = "NO"
        person.hair_color = "hsgdjasgf"
        person.height = "jdsfksdgf"
        person.mass = "lhfkhdsfk"
        person.skin_color = "lhsökfgsöd"
        person.homeworld = "kjdfksdgf"
        person.films = "[]"
        person.species = "[]"
        person.starships = "[]"
        person.vehicles = "[]"
        person.url = "jsakgasfg"
        person.created = "skjgfkdgf"
        person.edited = "jsgfösgdfsjgdf"
        return this.service.addTest(person)
    }
}
