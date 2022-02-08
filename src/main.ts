import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // to avoid users from passing invalid data to our controller
      transform: true, //Making sure our type from post request is what is expected also applicable for primitive types
      forbidNonWhitelisted: true, //
      transformOptions: {
        enableImplicitConversion: true, // We no longer have to explicitly specify Types with the @Type() decorator
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
