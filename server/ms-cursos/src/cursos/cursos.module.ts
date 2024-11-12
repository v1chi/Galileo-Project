import { Module } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { Curso } from './entities/curso.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursosResolver } from './cursos.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
//import { CursosController } from './cursos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Curso]), 
  ClientsModule.register([
    {
      name: 'COURSE_SERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'], // Asegúrate de que RabbitMQ esté corriendo
        queue: 'course_queue', // La cola debe coincidir con la que se configura en el microservicio de cursos
        queueOptions: { durable: false },
      },
    },
  ]),
  ],
  providers: [CursosService, CursosResolver],
  //controllers: [CursosController],
})
export class CursosModule {}
