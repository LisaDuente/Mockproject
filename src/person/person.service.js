"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PersonService = void 0;
var common_1 = require("@nestjs/common");
var Person_1 = require("../entity/Person");
var PersonService = /** @class */ (function () {
    function PersonService() {
    }
    PersonService.prototype.getAll = function () {
        return Person_1.Person.find(); //SELECT * from Person
    };
    PersonService.prototype.addTest = function (person) {
        return Person_1.Person.save(person);
    };
    PersonService = __decorate([
        (0, common_1.Injectable)()
    ], PersonService);
    return PersonService;
}());
exports.PersonService = PersonService;
