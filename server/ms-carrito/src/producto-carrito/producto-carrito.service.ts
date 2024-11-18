import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductoCarrito } from './entities/producto-carrito.entity';

@Injectable()
export class ProductoCarritoService {
  constructor(
    @InjectRepository(ProductoCarrito)
    private productoCarritoRepository: Repository<ProductoCarrito>,
  ) {}

  // Método para obtener todos los productos del carrito
  async findAllByCarrito(idCarrito: number): Promise<ProductoCarrito[]> {
    return this.productoCarritoRepository.find({ where: { idCarrito } });
  }

}
