"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PersonController = void 0;
var common_1 = require("@nestjs/common");
var Person_1 = require("../entity/Person");
var PersonController = /** @class */ (function () {
    function PersonController(service) {
        this.service = service;
    }
    PersonController.prototype.getAll = function () {
        return this.service.getAll();
    };
    PersonController.prototype.test = function () {
        var person = new Person_1.Person();
        person.id = 1;
        person.name = 'dgfsjdfg';
        person.birth_year = 'ksjfhakd';
        person.eye_color = 'jsgdjasgd';
        person.gender = 'NO';
        person.hair_color = 'hsgdjasgf';
        person.height = 'jdsfksdgf';
        person.mass = 'lhfkhdsfk';
        person.skin_color = 'lhsökfgsöd';
        person.homeworld = 'kjdfksdgf';
        person.films = '[]';
        person.species = '[]';
        person.starships = '[]';
        person.vehicles = '[]';
        person.url = 'jsakgasfg';
        person.created = 'skjgfkdgf';
        person.edited = 'jsgfösgdfsjgdf';
        return this.service.addTest(person);
    };
    __decorate([
        (0, common_1.Get)('getAll')
    ], PersonController.prototype, "getAll");
    __decorate([
        (0, common_1.Post)('test')
    ], PersonController.prototype, "test");
    PersonController = __decorate([
        (0, common_1.Controller)('person')
    ], PersonController);
    return PersonController;
}());
exports.PersonController = PersonController;
