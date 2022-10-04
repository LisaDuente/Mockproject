"use strict";
exports.__esModule = true;
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Person_1 = require("./entity/Person");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5434,
    username: 'newtons',
    password: 'newton123',
    database: 'Starwars',
    synchronize: true,
    logging: false,
    entities: [Person_1.Person],
    migrations: [],
    subscribers: []
});
