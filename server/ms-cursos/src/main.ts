import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // Crear la aplicación HTTP
  const app = await NestFactory.create(AppModule);

  // Configurar el microservicio de RabbitMQ
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'courses_queue',
    },
  });

  // Iniciar ambos servicios
  await app.startAllMicroservices();
  await app.listen(3002); // Puerto para el servidor HTTP y el Playground de GraphQL
}
bootstrap();