import { Module } from '@nestjs/common';
import { CursosModule } from './cursos/cursos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './cursos/entities/curso.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', 
      password: 'aparatos',  
      database: 'prueba_cursos',  
      entities: [Curso],
      synchronize: true,  
    }),
    CursosModule,  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
