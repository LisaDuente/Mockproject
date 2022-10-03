import { HttpService } from '@nestjs/axios';
import { CreateSwapiDto } from './dto/create-swapi.dto';
import { UpdateSwapiDto } from './dto/update-swapi.dto';
export declare class SwapiService {
    private httpService;
    constructor(httpService: HttpService);
    getAllPersons(): Promise<import("rxjs").Observable<Promise<any[]>>>;
    create(createSwapiDto: CreateSwapiDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSwapiDto: UpdateSwapiDto): string;
    remove(id: number): string;
}
