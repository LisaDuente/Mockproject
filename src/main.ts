import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true
  }))
    
=======
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }))
>>>>>>> feature/GetRequests
  await app.listen(3000);
}
bootstrap();
