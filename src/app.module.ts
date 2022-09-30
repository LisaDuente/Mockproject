import { Module } from '@nestjs/common';
import { Swapi2Module } from './swapi2/swapi2.module';
import { SwapiModule } from './swapi/swapi.module';

@Module({
  imports: [Swapi2Module, SwapiModule],
})
export class AppModule {}
