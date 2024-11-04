import { Module } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { Curso } from './entities/curso.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursosResolver } from './cursos.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Curso])],
  providers: [CursosService, CursosResolver],
})
export class CursosModule {}
