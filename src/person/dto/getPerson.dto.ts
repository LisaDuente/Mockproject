import { IsNumber, IsOptional, IsString } from "class-validator";

export class GetPersonDto {
    @IsOptional()
    @IsNumber()
    id: number;

    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    birth_year: string;

    @IsString()
    @IsOptional()
    eye_color: string;

    @IsString()
    @IsOptional()
    gender: string;

    @IsString()
    @IsOptional()
    hair_color: string;

    @IsString()
    @IsOptional()
    height: string;

    @IsString()
    @IsOptional()
    mass: string;

    @IsString()
    @IsOptional()
    skin_color: string;

    @IsString()
    @IsOptional()
    homeworld: string;

    @IsString()
    @IsOptional()
    films: string;

    @IsString()
    @IsOptional()
    species: string;

    @IsString()
    @IsOptional()
    starships: string;

    @IsString()
    @IsOptional()
    vehicles: string;

    @IsString()
    @IsOptional()
    url: string;

    @IsString()
    @IsOptional()
    created: string;

    @IsString()
    @IsOptional()
    edited: string;
}