import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { SwapiService } from '../swapi/swapi.service';
import { HttpModule } from '@nestjs/axios';
import { DataSource } from 'typeorm';

@Module({
  imports: [HttpModule],
  providers: [PersonService, SwapiService],
  controllers: [PersonController],
})
export class PersonModule {}
