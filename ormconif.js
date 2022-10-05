"use strict";
exports.__esModule = true;
var Person_1 = require("./src/entity/Person");
var config = {
    type: 'postgres',
    host: 'localhost',
    port: 5434,
    username: 'newtons',
    password: 'newton123',
    database: 'Starwars',
    synchronize: true,
    logging: false,
    entities: [Person_1.Person],
    migrations: ["src/migration"],
    subscribers: []
};
exports["default"] = config;
