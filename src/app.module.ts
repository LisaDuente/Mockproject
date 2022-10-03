import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SwapiModule } from './swapi/swapi.module';

@Module({
  imports: [SwapiModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 4000,
      username: 'newtons',
      password: 'newton123',
      database: 'Starwars',
      entities: [],
      synchronize: false      // WARNING!!!! Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
    })],
})
export class AppModule {}
