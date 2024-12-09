import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CursosService } from './cursos.service';
import { NotFoundException } from '@nestjs/common';

@Controller()
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @MessagePattern({ cmd: 'get_curso_precio' })
  async getCursoPrecio(idCurso: number): Promise<number> {
    console.log("Recibido mensaje para obtener precio del curso:", idCurso);
    const curso = await this.cursosService.findOne(idCurso);
    if (!curso) {
      throw new NotFoundException('Curso no encontrado');
    }
    console.log("Precio del curso:", curso.precio);
    return curso.precio;
  }
}