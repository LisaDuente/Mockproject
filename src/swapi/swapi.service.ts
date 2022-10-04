import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { response } from 'express';
import { lastValueFrom, map, pipe } from 'rxjs';
import { CreateSwapiDto } from './dto/create-swapi.dto';
import { UpdateSwapiDto } from './dto/update-swapi.dto';

@Injectable()
export class SwapiService {
  constructor(private httpService: HttpService) {}

  async getAllPersons() {
    let people = [];
    const peopleArr = [];

    return this.httpService
      .get('https://swapi.dev/api/people')
      .pipe(
        map((response) => {
          people = response.data.results;
          return response.data.count;
        }),
      )
      .pipe(
        map(async (count) => {
          const numberOfPagesLeft = Math.ceil((count - 1) / 10);
          const promises = [];
          for (let i = 2; i <= numberOfPagesLeft; i++) {
            promises.push(
              await lastValueFrom(
                this.httpService
                  .get(`https://swapi.dev/api/people?page=${i}`)
                  .pipe(map((response) => response.data.results)),
              ),
            );
          }

          for (const ppl of people) {
            peopleArr.push(ppl);
          }

          for (const array of promises) {
            for (const people of array) {
              peopleArr.push(people);
            }
          }

          console.log(peopleArr.length);
          return peopleArr;
          // return Promise.all(promises);
        }),
      );
    // .pipe(
    //   map(async (response) => {
    //     console.log(response);
    //     const newArray = [];
    //     for (const array of people) {
    //       newArray.push(array);
    //       for (const persons of array) {
    //         console.log(persons);
    //       }
    //     }
    //     return newArray;
    //   }),
    // );
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

  update(id: number, updateSwapiDto: UpdateSwapiDto) {
    return `This action updates a #${id} swapi`;
  }

  remove(id: number) {
    return `This action removes a #${id} swapi`;
  }
}
