import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { response } from 'express';
import { lastValueFrom, map, pipe } from 'rxjs';
import { Person } from '../entity/Person';
import { CreateSwapiDto } from './dto/create-swapi.dto';
import { UpdateSwapiDto } from './dto/update-swapi.dto';

@Injectable()
export class SwapiService {
  constructor(private httpService: HttpService) {}

  async getAllPersons() {
    let people = [];

    return lastValueFrom(this.httpService
      .get('https://swapi.dev/api/people')
      .pipe(
        map((response) => {
          return response.data.count;
        }),
      )
      .pipe(
        map(async (count) => {
          const numberOfPagesLeft = Math.ceil((count - 1) / 10);
          
          for (let i = 1; i <= numberOfPagesLeft; i++) {
            await lastValueFrom(
              this.httpService
                .get(`https://swapi.dev/api/people?page=${i}`)
                .pipe(map((response) => {
                  for(let person of  response.data.results){
                    people.push(person)
                  } 
              })),
            )
          }

          return people;
        }),
      ))
  }

  create(createSwapiDto: CreateSwapiDto) {
    return 'This action adds a new swapi';
  }

  findAll() {
    return `This action returns all swapi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} swapi`;
  }

  update(id: number, updateSwapiDto: Partial<UpdateSwapiDto> ) {
    
    return Person.save({...updateSwapiDto});
  }1

  remove(id: number) {
    return `This action removes a #${id} swapi`;
  }
}
