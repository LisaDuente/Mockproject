import { IsNotEmpty, IsNumber} from "class-validator";

export class GetDataDto {
    @IsNumber()
    @IsNotEmpty()
    id: number
}