import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //* solo deja la data que espero, lo demas lo ignora
      forbidNonWhitelisted: true, // * lanza un error si se manda un dato que no existe
    }),
  );

  await app.listen(3000);
}
bootstrap();
