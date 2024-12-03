import { Module } from '@nestjs/common';
import { CarritoModule } from './carrito/carrito.module';
import { ProductoCarritoModule } from './producto-carrito/producto-carrito.module';
import { ProductoCarrito } from './producto-carrito/entities/producto-carrito.entity';
import { Carrito } from './carrito/entities/carrito.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin123',
    database: 'carrito',
    entities: [Carrito, ProductoCarrito],
    synchronize: true,
  }), 
  GraphQLModule.forRoot({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Generación automática del esquema
  }),
  CarritoModule, ProductoCarritoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
