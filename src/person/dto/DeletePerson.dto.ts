import { IsNumber } from "class-validator";

export class DeletePersonDto {
    @IsNumber()
    id: number
}