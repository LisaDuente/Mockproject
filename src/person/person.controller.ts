import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { PersistedEntityNotFoundError } from 'typeorm';
import { GetPersonDto } from './dto/getPerson.dto';
import { UpdatePerson } from './dto/updatePerson.dto';
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

  //problem: if we want to find a homeworld we need to look up the link in the relation! 
  //add in SEED: fetch all the data from the other relations to make an array with words?
  @Get("getByHomeworld")
  getByHomeWorld(@Body() dto: GetPersonDto){
    return this.service.getByHomeworld(dto.homeworld);
  }

  @Post('test')
  test(@Body() json: string) {
    let object = JSON.parse(JSON.stringify(json));
    
    return this.service.addTest(object);
  }

  @Get("/seed")
  seed(){
    return this.service.seedDatabase()
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updatePerson: Partial<UpdatePerson>) {
    return this.service.update(+id, updatePerson);
  }
}
