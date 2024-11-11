import { Controller } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { Post, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices'; 

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Post('precio')
  async getPrice(@Body() body: { courseId: number }) {
    // Llama al servicio para obtener el precio del curso
    return this.cursosService.handleCoursePriceRequest(body);  // Delegar la lógica al servicio
  }
}
