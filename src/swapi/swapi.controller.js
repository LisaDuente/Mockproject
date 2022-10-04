"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.SwapiController = void 0;
var common_1 = require("@nestjs/common");
var SwapiController = /** @class */ (function () {
    function SwapiController(swapiService) {
        this.swapiService = swapiService;
    }
    SwapiController.prototype.getAllPersons = function () {
        return this.swapiService.getAllPersons();
    };
    SwapiController.prototype.create = function (createSwapiDto) {
        return this.swapiService.create(createSwapiDto);
    };
    SwapiController.prototype.findAll = function () {
        return this.swapiService.findAll();
    };
    SwapiController.prototype.findOne = function (id) {
        return this.swapiService.findOne(+id);
    };
    SwapiController.prototype.update = function (id, updateSwapiDto) {
        return this.swapiService.update(+id, updateSwapiDto);
    };
    SwapiController.prototype.remove = function (id) {
        return this.swapiService.remove(+id);
    };
    __decorate([
        (0, common_1.Get)('allPersons')
    ], SwapiController.prototype, "getAllPersons");
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], SwapiController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], SwapiController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], SwapiController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], SwapiController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], SwapiController.prototype, "remove");
    SwapiController = __decorate([
        (0, common_1.Controller)('swapi')
    ], SwapiController);
    return SwapiController;
}());
exports.SwapiController = SwapiController;
