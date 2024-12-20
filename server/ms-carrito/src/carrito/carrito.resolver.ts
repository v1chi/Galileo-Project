import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CarritoService } from './carrito.service';
import { Carrito } from './entities/carrito.entity';
import { ProductoCarrito } from '../producto-carrito/entities/producto-carrito.entity'; // Importamos ProductoCarrito


@Resolver(() => Carrito)
export class CarritoResolver {
  constructor(private readonly carritoService: CarritoService) {}

  // Consulta para obtener todos los carritos
  @Query(() => [Carrito], { name: 'getAllCarritos' })
  findAll() {
    return this.carritoService.findAll();
  }

  // Consulta para obtener un carrito por ID
  @Query(() => Carrito)
  async getCarrito(@Args('id', {type: () => Int}) id: number) {
    return this.carritoService.findOneById(id);  // Llama al servicio para obtener el carrito
  }

  // Consulta para obtener el historial de compras de un usuario
  @Query(() => [Carrito])
  async getHistorialCompras(@Args('idUsuario', {type: () => Int}) idUsuario: number) {
    return this.carritoService.getHistorialCompras(idUsuario);  // Llama al servicio para obtener el historial
  }

  // Mutación para crear un carrito
  @Mutation(() => Carrito)
  async createCarrito(@Args('idUsuario', {type: () => Int}) idUsuario: number) {
    return this.carritoService.createCarrito(idUsuario);  // Llama al servicio para crear el carrito
  }

  // Mutación para agregar un curso al carrito
  @Mutation(() => Carrito)
  async addCurso(
    @Args('idCarrito', {type: () => Int}) idCarrito: number,
    @Args('idCurso', {type: () => Int}) idCurso: number
  ) {
    return this.carritoService.addCurso(idCarrito, idCurso);  // Llama al servicio para agregar el curso al carrito
  }

  // Mutación para eliminar un curso del carrito
  @Mutation(() => Boolean)
  async removeCurso(
    @Args('idCarrito', {type: () => Int}) idCarrito: number,
    @Args('idCurso', {type: () => Int}) idCurso: number
  ) {
    await this.carritoService.removeCursoFromCarrito(idCarrito, idCurso);  // Llama al servicio para eliminar el curso
    return true;
  }

  // Mutación para marcar el carrito como pendiente
  @Mutation(() => Carrito)
  async marcarCarritoComoPendiente(@Args('idCarrito', {type: () => Int}) idCarrito: number) {
    return this.carritoService.marcarCarritoComoPendiente(idCarrito);  // Llama al servicio para marcar el carrito como pendiente
  }

  // Mutación para finalizar el carrito
  @Mutation(() => Carrito)
  async finalizarCarrito(@Args('idCarrito', {type: () => Int}) idCarrito: number) {
    return this.carritoService.finalizarCarrito(idCarrito);  // Llama al servicio para finalizar el carrito
  }

  // Consulta para obtener los cursos de un carrito finalizado
  @Query(() => [ProductoCarrito])
  async getCursosEnCarrito(@Args('idCarrito', {type: () => Int}) idCarrito: number) {
    return this.carritoService.getCursosEnCarrito(idCarrito);  // Llama al servicio para obtener los cursos
  }

  
}
