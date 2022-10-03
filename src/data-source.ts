import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Person } from './entity/Person';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'newtons',
  password: 'newton123',
  database: 'Starwars',
  synchronize: false,
  logging: false,
  entities: [Person],
  migrations: [],
  subscribers: [],
});
