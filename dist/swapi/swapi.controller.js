"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapiController = void 0;
const common_1 = require("@nestjs/common");
const swapi_service_1 = require("./swapi.service");
const create_swapi_dto_1 = require("./dto/create-swapi.dto");
const update_swapi_dto_1 = require("./dto/update-swapi.dto");
let SwapiController = class SwapiController {
    constructor(swapiService) {
        this.swapiService = swapiService;
    }
    getAllPersons() {
        return this.swapiService.getAllPersons();
    }
    create(createSwapiDto) {
        return this.swapiService.create(createSwapiDto);
    }
    findAll() {
        return this.swapiService.findAll();
    }
    findOne(id) {
        return this.swapiService.findOne(+id);
    }
    update(id, updateSwapiDto) {
        return this.swapiService.update(+id, updateSwapiDto);
    }
    remove(id) {
        return this.swapiService.remove(+id);
    }
};
__decorate([
    (0, common_1.Get)('allPersons'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SwapiController.prototype, "getAllPersons", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_swapi_dto_1.CreateSwapiDto]),
    __metadata("design:returntype", void 0)
], SwapiController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SwapiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SwapiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_swapi_dto_1.UpdateSwapiDto]),
    __metadata("design:returntype", void 0)
], SwapiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SwapiController.prototype, "remove", null);
SwapiController = __decorate([
    (0, common_1.Controller)('swapi'),
    __metadata("design:paramtypes", [swapi_service_1.SwapiService])
], SwapiController);
exports.SwapiController = SwapiController;
//# sourceMappingURL=swapi.controller.js.map