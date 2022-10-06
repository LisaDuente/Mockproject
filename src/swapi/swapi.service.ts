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

  async getHomeworld(id: number){
    return await lastValueFrom(
      this.httpService.get(`https://swapi.dev/api/planets/${id}/`)
        .pipe(map((response) => {return response.data.name}))
    )
  }

  async getHomeworldByPath(path: string){
    return await lastValueFrom(
      this.httpService.get(path)
        .pipe(map((response) => {return response.data.name}))
    )
  }

  async getFilm(id: number){
  return await lastValueFrom(
    this.httpService.get(`https://swapi.dev/api/films/${id}/`)
      .pipe(map((response) => {return response.data.title}))
  )
  }

  async getFilmsByPath(path: string){
    return await lastValueFrom(
      this.httpService.get(path)
        .pipe(map((response) => {return response.data.title}))
    )
  }

  async getSpecies(id: number){
    return await lastValueFrom(
      this.httpService.get(`https://swapi.dev/api/species/${id}/`)
        .pipe(map((response) => {return response.data.name}))
    )
    }

  async getVehicle(id: number){
    return await lastValueFrom(
      this.httpService.get(`https://swapi.dev/api/vehicles/${id}/`)
        .pipe(map((response) => {return response.data.name}))
    )
    }
    

    async getStarship(id: number){
      return await lastValueFrom(
        this.httpService.get(`https://swapi.dev/api/starships/${id}/`)
          .pipe(map((response) => {return response.data.name}))
      )
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
