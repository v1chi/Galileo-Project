import { Controller, Post, Param, Get, Delete, Patch, Body } from '@nestjs/common';
import { CarritoService } from './carrito.service';

@Controller('carrito')
export class CarritoController {
  constructor(private readonly carritoService: CarritoService) {}

  @Post(':idUsuario')
  createCarrito(@Param('idUsuario') idUsuario: number) {
    return this.carritoService.createCarrito(idUsuario);
  }

  @Post(':idCarrito/cursos/:idCurso')
  addCurso(@Param('idCarrito') idCarrito: number, @Param('idCurso') idCurso: number) {
    return this.carritoService.addCurso(idCarrito, idCurso);
  }

  @Delete(':idCarrito/cursos/:idCurso')
  removeCursoFromCarrito(
    @Param('idCarrito') idCarrito: number,
    @Param('idCurso') idCurso: number,
  ) {
    return this.carritoService.removeCursoFromCarrito(idCarrito, idCurso);
  }

  @Get(':idUsuario/activo')
  getCarritoActivo(@Param('idUsuario') idUsuario: number) {
    return this.carritoService.getCarritoActivo(idUsuario);
  }

  @Get(':idUsuario/finalizados')
  getCarritosFinalizados(@Param('idUsuario') idUsuario: number) {
    return this.carritoService.getCarritosFinalizados(idUsuario);
  }

  @Patch(':idCarrito/finalizar')
  finalizarCarrito(@Param('idCarrito') idCarrito: number) {
    return this.carritoService.finalizarCarrito(idCarrito);
  }
}
