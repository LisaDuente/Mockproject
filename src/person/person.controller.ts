import { Body, Controller, Get, Post } from '@nestjs/common';
import { PersistedEntityNotFoundError } from 'typeorm';
import { Person } from '../entity/Person';
import { PersonDto } from './dto/addPerson.dto';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
  constructor(private service: PersonService) {}

  @Get('getAll')
  getAll() {
    return this.service.getAll();
  }

  @Post('test')
  test(@Body() json: string) {
    const object = JSON.parse(JSON.stringify(json));

    return this.service.addTest(object);
  }

  @Get('seed')
  seed() {
    return this.service.seedDatabase();
  }
}
