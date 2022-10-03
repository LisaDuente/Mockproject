"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSwapiDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_swapi_dto_1 = require("./create-swapi.dto");
class UpdateSwapiDto extends (0, mapped_types_1.PartialType)(create_swapi_dto_1.CreateSwapiDto) {
}
exports.UpdateSwapiDto = UpdateSwapiDto;
//# sourceMappingURL=update-swapi.dto.js.map