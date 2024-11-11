import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrito } from './entities/carrito.entity';
import { ProductoCarrito } from '../producto-carrito/entities/producto-carrito.entity'; 
import { CarritoService } from './carrito.service';
import { CarritoController } from './carrito.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [TypeOrmModule.forFeature([Carrito, ProductoCarrito]),
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
  controllers: [CarritoController],
  providers: [CarritoService],
})
export class CarritoModule {}
