import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entity/Person';
import { SwapiModule } from './swapi/swapi.module';
import { PersonModule } from './person/person.module';

import config from "../ormconif";


@Module({
  imports: [
    SwapiModule, 
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Person]),
    PersonModule
    ],
})
export class AppModule {
}
