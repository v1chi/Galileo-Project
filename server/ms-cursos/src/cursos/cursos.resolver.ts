import { Resolver, Query, Mutation, Args, Int, Float } from '@nestjs/graphql';
import { CursosService } from './cursos.service';
import { Curso } from './entities/curso.entity';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { FilterCursoDto } from './dto/filter-curso.dto';

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

  //Obtener cursos filtrados usando el DTO
  @Query(() => [Curso], { name: 'getFilteredCursos' })
  findFiltered(@Args('filterCursoDto', { type: () => FilterCursoDto }) filterCursoDto: FilterCursoDto) {
    return this.cursosService.findFiltered(filterCursoDto);
  }

}
