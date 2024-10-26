import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarritoController } from './carrito/carrito.controller';
import { ProductoCarritoModule } from './producto-carrito/producto-carrito.module';
import { ProductoCarritoService } from './producto-carrito/producto-carrito.service';
import { ProductoCarritoController } from './producto-carrito/producto-carrito.controller';
import { CarritoModule } from './carrito/carrito.module';
import { CarritoService } from './carrito/carrito.service';
import { CarritoController } from './carrito/carrito.controller';

@Module({
  imports: [CarritoModule, ProductoCarritoModule],
  controllers: [AppController, CarritoController, ProductoCarritoController],
  providers: [AppService, CarritoService, ProductoCarritoService],
})
export class AppModule {}
