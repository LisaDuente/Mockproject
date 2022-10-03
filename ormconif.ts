import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { Person } from "./src/entity/Person";

const config: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5434,
    username: 'newtons',
    password: 'newton123',
    database: 'Starwars',
    synchronize: true,
    logging: false,
    entities: [Person],
    migrations: ["src/migration"],
    subscribers: [],

}

export default config;