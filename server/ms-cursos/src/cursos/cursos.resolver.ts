import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CursosService } from './cursos.service';
import { Curso } from './entities/curso.entity';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';

@Resolver(() => Curso)
export class CursosResolver {
  constructor(private readonly cursosService: CursosService) {}

  @Query(() => [Curso], { name: 'getAllCursos' })
  findAll() {
    return this.cursosService.findAll();
  }

  @Query(() => Curso, { name: 'getCursoById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.cursosService.findOne(id);
  }

  @Mutation(() => Curso)
  createCurso(@Args('createCursoDto') createCursoDto: CreateCursoDto) {
    return this.cursosService.create(createCursoDto);
  }

  @Mutation(() => Curso)
  updateCurso(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateCursoDto') updateCursoDto: UpdateCursoDto,
  ) {
    return this.cursosService.update(id, updateCursoDto);
  }

  @Mutation(() => Curso)
  removeCurso(@Args('id', { type: () => Int }) id: number) {
    return this.cursosService.remove(id);
  }
}
