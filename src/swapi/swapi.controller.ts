import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SwapiService } from './swapi.service';
import { CreateSwapiDto } from './dto/create-swapi.dto';
import { UpdateSwapiDto } from './dto/update-swapi.dto';
import { NOTIMP } from 'dns';

@Controller('swapi')
export class SwapiController {
  constructor(private readonly swapiService: SwapiService) {}

  @Get('allPersons')
  getAllPersons(){
   return this.swapiService.getAllPersons();
  }

  @Post()
  create(@Body() createSwapiDto: CreateSwapiDto) {
    return this.swapiService.create(createSwapiDto);
  }

  @Get()
  findAll() {
    return this.swapiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.swapiService.findOne(+id);
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.swapiService.remove(+id);
  }
}
