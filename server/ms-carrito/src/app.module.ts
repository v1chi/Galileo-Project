import { Module } from '@nestjs/common';
import { CarritoModule } from './carrito/carrito.module';
import { ProductoCarritoModule } from './producto-carrito/producto-carrito.module';
import { ProductoCarrito } from './producto-carrito/entities/producto-carrito.entity';
import { Carrito } from './carrito/entities/carrito.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { WebpayController } from './webpay/webpay.controller';
import { WebpayService } from './webpay/webpay.service';
import { WebpayModule } from './webpay/webpay.module';

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
  }), 
  GraphQLModule.forRoot({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Generación automática del esquema
  }),
  CarritoModule, ProductoCarritoModule, WebpayModule],
  controllers: [WebpayController],
  providers: [WebpayService],
})
export class AppModule {}
