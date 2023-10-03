import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //elimina datos del json q no estamos esperando
      forbidNonWhitelisted: true // devuelve error cuando el front envia datos en el json que no esperamos
    })
  )
  await app.listen(3000);
}
bootstrap();
