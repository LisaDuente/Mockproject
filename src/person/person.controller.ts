import { DeletePersonDto } from './dto/DeletePerson.dto';
import { Body, Controller, Delete, Get, ParseIntPipe, Post } from '@nestjs/common';
import { PersistedEntityNotFoundError } from 'typeorm';
import { PersonDto } from './dto/addPerson.dto';
import { GetPersonDto } from './dto/getPerson.dto';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
  constructor(private service: PersonService) {}

  @Get('getAll')
  getAll() {
    return this.service.getAll();
  }

  @Get('getById')
  getById(@Body() dto: GetPersonDto) {
    return this.service.getById(dto.id);
  }

  //Or try the param version
  /*
  @Get('getById/:id')
  getById(@Param("id", ParseIntPipe) id: number) {
    return this.service.getById(id);
  }
  */

  @Get('getByName')
  getByName(@Body() dto: GetPersonDto){
    return this.service.getByName(dto.name)
  }

  @Get('getByBirthday')
  getByBirthday(@Body() dto: GetPersonDto){
    return this.service.getByBirthDate(dto.birth_year)
  }

  @Get("getByEyeColor")
  getByEyeColor(@Body() dto: GetPersonDto){
    return this.service.getByEyeColor(dto.eye_color)
  }

  @Get("getByMass")
  getByMass(@Body() dto: GetPersonDto){
    return this.service.getByMass(dto.mass)
  }

  @Get("getByHeight")
  getByHeight(@Body() dto: GetPersonDto){
    return this.service.getByHeight(dto.height)
  }

  @Get("getByGender")
  getByGender(@Body() dto: GetPersonDto){
    return this.service.getByGender(dto.gender)
  }

  @Get("getByHairColor")
  getByHair(@Body() dto: GetPersonDto){
    return this.service.getByHair(dto.hair_color)
  }

  @Get("getBySkinColor")
  getBySkin(@Body() dto: GetPersonDto){
    return this.service.getBySkin(dto.skin_color)
  }

  @Get("mixParams")
  getByServeralParams(@Body() dto: GetPersonDto){
    return this.service.getByServeralParams(dto);
  }

  @Get("getByHomeworld")
  getByHomeWorld(@Body() dto: GetPersonDto){
    return this.service.getByHomeworld(dto.homeworld);
  }

  @Get("getBySpecies")
  getBySpecies(@Body() dto: GetPersonDto){
    return this.service.getBySpecies(dto.species);
  }

  @Get("getByFilm")
  getByFilm(@Body() dto: GetPersonDto){
    return this.service.getByFilm(dto.films);
  }

  @Get("getByVehicle")
  getByVehicle(@Body() dto: GetPersonDto){
    return this.service.getByVehicle(dto.vehicles);
  }

  @Get("getByStarship")
  getByStarship(@Body() dto: GetPersonDto){
    return this.service.getByStarship(dto.starships);
  }

  @Post('test')
  test(@Body() json: string) {
    const object = JSON.parse(JSON.stringify(json));

    return this.service.addTest(object);
  }

  @Get('seed')
  seed() {
    return this.service.seedDatabase();
  }

  @Delete('deleteOne')
  deleteOne(@Body() dto: DeletePersonDto){
    return this.service.deleteOne(+dto.id)
  }


  @Delete('deleteAll')
  deleteAll() {
    return this.service.deleteAll()
  }

  // @Get('softDeleteOne')
  // softDeleteOne(@Body() dto: DeletePersonDto){
  //   return this.service.softDelete(+dto.id)
  // }

  // @Get('restoreOne')
  // restore(@Body() dto: DeletePersonDto) {
  //   return this.service.restoreSoftDelete(+dto.id)
  // }

  @Get("seedWithoutLinks")
  seedWOL(){
    return this.service.seedDatabaseWithoutLinks()
  }

  @Post("addWithoutLinks")
  addWithoutLinks(@Body() dto: PersonDto){
    return this.service.createPersonWithoutLinks(dto)
  }
}
