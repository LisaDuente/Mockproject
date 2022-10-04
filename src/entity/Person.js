"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Person = void 0;
var typeorm_1 = require("typeorm");
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person() {
        return _super.call(this) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Person.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Person.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)()
    ], Person.prototype, "birth_year");
    __decorate([
        (0, typeorm_1.Column)()
    ], Person.prototype, "eye_color");
    __decorate([
        (0, typeorm_1.Column)()
    ], Person.prototype, "gender");
    __decorate([
        (0, typeorm_1.Column)()
    ], Person.prototype, "hair_color");
    __decorate([
        (0, typeorm_1.Column)()
    ], Person.prototype, "height");
    __decorate([
        (0, typeorm_1.Column)()
    ], Person.prototype, "mass");
    __decorate([
        (0, typeorm_1.Column)()
    ], Person.prototype, "skin_color");
    __decorate([
        (0, typeorm_1.Column)()
    ], Person.prototype, "homeworld");
    __decorate([
        (0, typeorm_1.Column)()
    ], Person.prototype, "films");
    __decorate([
        (0, typeorm_1.Column)()
    ], Person.prototype, "species");
    __decorate([
        (0, typeorm_1.Column)()
    ], Person.prototype, "starships");
    __decorate([
        (0, typeorm_1.Column)()
    ], Person.prototype, "vehicles");
    __decorate([
        (0, typeorm_1.Column)()
    ], Person.prototype, "url");
    __decorate([
        (0, typeorm_1.Column)()
    ], Person.prototype, "created");
    __decorate([
        (0, typeorm_1.Column)()
    ], Person.prototype, "edited");
    Person = __decorate([
        (0, typeorm_1.Entity)()
    ], Person);
    return Person;
}(typeorm_1.BaseEntity));
exports.Person = Person;
