import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { DeleteDateColumn } from 'typeorm';
import { DeletePersonDto } from './dto/DeletePerson.dto';
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

  @Delete('deleteOne')
  deleteOne(@Body() dto: DeletePersonDto){
    return this.service.deleteOne(+dto.id)
  }

  @Delete('deleteAll')
  deleteAll() {
    return this.service.deleteAll()
  }

  // @Get('softDeleteOne')
  // softDeleteOne(@Body() dto: DeletePersonDto){
  //   return this.service.softDelete(+dto.id)
  // }

  // @Get('restoreOne')
  // restore(@Body() dto: DeletePersonDto) {
  //   return this.service.restoreSoftDelete(+dto.id)
  // }
}
