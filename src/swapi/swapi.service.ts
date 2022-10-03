import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map, pipe } from 'rxjs';
import { CreateSwapiDto } from './dto/create-swapi.dto';
import { UpdateSwapiDto } from './dto/update-swapi.dto';

@Injectable()
export class SwapiService {
  constructor(private httpService: HttpService,){
    
  }
  
  async getAllPersons(){
    const personArray = await lastValueFrom(this.httpService.get('https://swapi.dev/api/people')
                      .pipe(map(response => response.data))) 

   return personArray 

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
