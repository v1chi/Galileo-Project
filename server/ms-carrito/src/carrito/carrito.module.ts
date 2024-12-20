import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrito } from './entities/carrito.entity';
import { ProductoCarrito } from '../producto-carrito/entities/producto-carrito.entity'; 
import { CarritoService } from './carrito.service';
//import { CarritoController } from './carrito.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CarritoResolver } from './carrito.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Carrito, ProductoCarrito]),
  ClientsModule.register([
    {
      name: 'COURSE_SERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'], 
        queue: 'courses_queue', 
        
      },
    },
  ]),

  ],
  //controllers: [CarritoController],
  providers: [CarritoService, CarritoResolver],
})
export class CarritoModule {}
