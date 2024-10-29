import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarritoController } from './carrito/carrito.controller';
import { CarritoModule } from './carrito/carrito.module';
import { CarritoService } from './carrito/carrito.service';
import { ProductoCarritoController } from './producto-carrito/producto-carrito.controller';
import { ProductoCarritoService } from './producto-carrito/producto-carrito.service';
import { ProductoCarritoModule } from './producto-carrito/producto-carrito.module';
import { ProductoCarrito } from './producto-carrito/entities/producto-carrito.entity';
import { Carrito } from './carrito/entities/carrito.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'aparatos',
    database: 'carrito',
    entities: [Carrito, ProductoCarrito],
    synchronize: true,
  }), CarritoModule, ProductoCarritoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
