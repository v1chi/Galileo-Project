import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductoCarritoService } from './producto-carrito.service';
import { ProductoCarrito } from './entities/producto-carrito.entity';


@Resolver(() => ProductoCarrito)
export class ProductoCarritoResolver {
  constructor(private readonly productoCarritoService: ProductoCarritoService) {}

  // Consulta para obtener todos los productos en el carrito
  @Query(() => [ProductoCarrito])
  async getProductosCarrito(@Args('idCarrito', {type: () => Int}) idCarrito: number) {
    return this.productoCarritoService.findAllByCarrito(idCarrito);  // Llama al servicio para obtener los productos
  }


}
