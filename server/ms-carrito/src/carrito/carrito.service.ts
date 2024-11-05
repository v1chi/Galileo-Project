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

  //Crear un carrito o devolver uno activo si el usuario ya tiene uno 
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

  //Añadir un curso al carrito
  async addCurso(idCarrito: number, idCurso: number): Promise<ProductoCarrito> {
    const productoCarrito = this.productoCarritoRepository.create({ idCarrito, idCurso });
    return this.productoCarritoRepository.save(productoCarrito);
  }

  //Eliminar un curso de un carrito
  async removeCursoFromCarrito(idCarrito: number, idCurso: number): Promise<void> {
    const curso = await this.productoCarritoRepository.findOne({
      where: { idCarrito, idCurso },
    });

    if (!curso) {
      throw new NotFoundException('El curso no está en el carrito.');
    }

    await this.productoCarritoRepository.remove(curso);
  }


  // Marcar carrito como pendiente antes de confirmar la compra
  async marcarCarritoComoPendiente(idCarrito: number): Promise<Carrito> {
    const carrito = await this.carritoRepository.findOneBy({ id: idCarrito });
    if (!carrito) throw new NotFoundException('El carrito no existe.');
    carrito.estado = 'pendiente';
    return this.carritoRepository.save(carrito);
  }

  // Finalizar un carrito, luego de confirmar la compra
  async finalizarCarrito(idCarrito: number): Promise<Carrito> {
    const carrito = await this.carritoRepository.findOneBy({ id: idCarrito });

    if (!carrito) {
      throw new NotFoundException('El carrito no existe.');
    }

    carrito.estado = 'finalizado';
    return this.carritoRepository.save(carrito);
  }

  // Obtener el historial de compras
  async getHistorialCompras(idUsuario: number): Promise<Carrito[]> {
    return this.carritoRepository.find({
      where: { idUsuario, estado: 'finalizado' },
    });
  }

  // Obtener cursos de un carrito finalizado
  async getCursosEnCarrito(idCarrito: number): Promise<ProductoCarrito[]> {
    return this.productoCarritoRepository.find({
      where: { idCarrito },
    });
  }
}
