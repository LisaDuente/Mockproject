import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class PersonDto {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  birth_year: string;

  @IsString()
  eye_color: string;

  @IsString()
  gender: string;

  @IsString()
  hair_color: string;

  @IsString()
  height: string;

  @IsString()
  mass: string;

  @IsString()
  skin_color: string;

  @IsString()
  homeworld: string;

  @IsArray()
  films: string;

  @IsArray()
  species: string;

  @IsArray()
  starships: string;

  @IsArray()
  vehicles: string;

  @IsString()
  url: string;

  @IsString()
  created: string;

  @IsString()
  edited: string;
}
