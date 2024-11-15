import { Module } from '@nestjs/common';
import { CursosModule } from './cursos/cursos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './cursos/entities/curso.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', 
      password: 'admin123',  
      database: 'cursos_galileo',  
      entities: [Curso],
      synchronize: true,  
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Generación automática del esquema
    }),
    CursosModule,  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
