import { PartialType } from "@nestjs/mapped-types";
import { PersonDto } from "./addPerson.dto";

export class UpdatePerson extends PartialType(PersonDto) {
    
}