import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SwapiService } from './swapi.service';
import { CreateSwapiDto } from './dto/create-swapi.dto';
import { UpdateSwapiDto } from './dto/update-swapi.dto';
import { GetDataDto } from './dto/GetData.dto';


@Controller('swapi')
export class SwapiController {
  constructor(private readonly swapiService: SwapiService) {}

  @Get('allPersons')
  getAllPersons(){
   return this.swapiService.getAllPersons();
  }

  @Get("getHomeworld")
  getHomeworld(@Body() dto: GetDataDto){
    return this.swapiService.getHomeworld(dto.id);
  }

  @Get("getFilm")
  getFilm(@Body() dto: GetDataDto){
    return this.swapiService.getFilm(dto.id)
  }

  @Get("getSpecies")
  getSpecies(@Body() dto: GetDataDto){
    return this.swapiService.getSpecies(dto.id)
  }

  @Get("getVehicle")
  getVehicle(@Body() dto: GetDataDto){
    return this.swapiService.getVehicle(dto.id)
  }

  @Get("getStarship")
  getStarship(@Body() dto: GetDataDto){
    return this.swapiService.getStarship(dto.id)
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSwapiDto: UpdateSwapiDto) {
    return this.swapiService.update(+id, updateSwapiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.swapiService.remove(+id);
  }
}
