import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.connectMicroservice<MicroserviceOptions>({ transport: Transport.RMQ, options: { urls: ['amqp://localhost:5672'], queue: 'course_queue', queueOptions: { durable: false }, }, }); 
  // await app.startAllMicroservices();
  app.enableCors();
  await app.listen(3003);
  console.log(`Servidor corriendo en el puerto ${3003}`);

}
bootstrap();
