import { SwapiService } from './swapi.service';
import { CreateSwapiDto } from './dto/create-swapi.dto';
import { UpdateSwapiDto } from './dto/update-swapi.dto';
export declare class SwapiController {
    private readonly swapiService;
    constructor(swapiService: SwapiService);
    getAllPersons(): Promise<import("rxjs").Observable<Promise<any[]>>>;
    create(createSwapiDto: CreateSwapiDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSwapiDto: UpdateSwapiDto): string;
    remove(id: string): string;
}
