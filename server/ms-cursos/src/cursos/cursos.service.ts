import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, Like } from 'typeorm';
import { Curso } from './entities/curso.entity';
import { FilterCursoDto } from './dto/filter-curso.dto';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(Curso)
    private readonly cursoRepository: Repository<Curso>,
  ) {}

  async create(createCursoDto: CreateCursoDto){
    const curso = createCursoDto;
    return this.cursoRepository.save(curso);
  }

  findAll() {
    return this.cursoRepository.find();
  }

  async findOne(id: number): Promise<Curso> {
    const course = await this.cursoRepository.findOneBy({ id });
    if (!course) {
      throw new NotFoundException('Curso no encontrado');
    }
    return course;
  }

  async update(id: number, updateCourseDto: UpdateCursoDto): Promise<Curso> {
    const course = await this.findOne(id);
    Object.assign(course, updateCourseDto);
    return this.cursoRepository.save(course);
  }

  async remove(id: number): Promise<void> {
    const result = await this.cursoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Curso no encontrado');
    }
  }

  // Obtener cursos aplicando filtros
  async findFiltered(filterCursoDto: FilterCursoDto): Promise<Curso[]> {
    const { categoria, minPrecio, maxPrecio, nivel, nombre } = filterCursoDto;
    const whereConditions: any = {};

    if (categoria) whereConditions.categoria = categoria;
    if (nivel) whereConditions.nivel = nivel;
    if (minPrecio !== undefined && maxPrecio !== undefined) {
      whereConditions.precio = Between(minPrecio, maxPrecio);
    }
    if (nombre) whereConditions.nombre = Like(`%${nombre}%`);

    return this.cursoRepository.find({ where: whereConditions });
  }
}
