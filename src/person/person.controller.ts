import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UpdateSwapiDto } from '../swapi/dto/update-swapi.dto';
import { UpdatePerson } from './dto/updatePerson.dto';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
  swapiService: any;
  constructor(private service: PersonService) {}

  @Get('getAll')
  getAll() {
    return this.service.getAll();
  }

  @Post('test')
  test(@Body() json: string) {
    let object = JSON.parse(JSON.stringify(json));
    
    return this.service.addTest(object);
  }

  @Get("/seed")
  seed(){
    return this.service.seedDatabase()
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updatePerson: Partial<UpdatePerson>) {
    return this.service.update(+id, updatePerson);
  }
}
