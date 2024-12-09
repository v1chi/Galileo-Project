import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  await app.listen(3003);
  console.log(`Servidor corriendo en el puerto ${3003}`);

}
bootstrap();
