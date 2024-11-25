import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilita CORS para permitir solicitudes del frontend en localhost:3000
  app.enableCors({
    origin: 'http://localhost:3000', // Permite solicitudes solo desde localhost:3000
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
    allowedHeaders: 'Content-Type, Accept', // Cabeceras permitidas
  });

  await app.listen(3010);  // O el puerto que estés utilizando
}
bootstrap();
dotenv.config();  // Cargar las variables de entorno
