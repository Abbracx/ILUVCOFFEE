import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
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
  const options = new DocumentBuilder()
    .setTitle('Iluvcoffee')
    .setDescription('Coffee Application')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
