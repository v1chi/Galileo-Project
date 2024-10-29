import { Injectable, NotFoundException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrito } from './entities/carrito.entity';
import { ProductoCarrito } from '../producto-carrito/entities/producto-carrito.entity';

@Injectable()
export class CarritoService {
  constructor(
    @InjectRepository(Carrito) private carritoRepository: Repository<Carrito>,
    @InjectRepository(ProductoCarrito) private productoCarritoRepository: Repository<ProductoCarrito>,
  ) {}

  // 1. Crear un carrito o devolver uno activo si el usuario ya tiene uno 
  async createCarrito(idUsuario: number): Promise<Carrito> {
    const carritoActivo = await this.carritoRepository.findOne({
      where: { idUsuario, estado: 'activo' },
    });

    if (carritoActivo) {
      return carritoActivo;
    }

    const nuevoCarrito = this.carritoRepository.create({ idUsuario });
    return this.carritoRepository.save(nuevoCarrito);
  }

  // 2. Añadir un curso al carrito
  async addCurso(idCarrito: number, idCurso: number): Promise<ProductoCarrito> {
    const productoCarrito = this.productoCarritoRepository.create({ idCarrito, idCurso });
    return this.productoCarritoRepository.save(productoCarrito);
  }

  // 3. Eliminar un curso de un carrito
  async removeCursoFromCarrito(idCarrito: number, idCurso: number): Promise<void> {
    const curso = await this.productoCarritoRepository.findOne({
      where: { idCarrito, idCurso },
    });

    if (!curso) {
      throw new NotFoundException('El curso no está en el carrito.');
    }

    await this.productoCarritoRepository.remove(curso);
  }

  // 4. Obtener el carrito activo de un usuario
  async getCarritoActivo(idUsuario: number): Promise<Carrito> {
    const carrito = await this.carritoRepository.findOne({
      where: { idUsuario, estado: 'activo' },
    });

    if (!carrito) {
      throw new NotFoundException('No tienes un carrito activo.');
    }

    return carrito;
  }

  // 5. Obtener carritos finalizados del usuario
  async getCarritosFinalizados(idUsuario: number): Promise<Carrito[]> {
    return this.carritoRepository.find({
      where: { idUsuario, estado: 'finalizado' },
    });
  }

  // 6. Finalizar un carrito
  async finalizarCarrito(idCarrito: number): Promise<Carrito> {
    const carrito = await this.carritoRepository.findOneBy({ id: idCarrito });

    if (!carrito) {
      throw new NotFoundException('El carrito no existe.');
    }

    carrito.estado = 'finalizado';
    return this.carritoRepository.save(carrito);
  }
}
