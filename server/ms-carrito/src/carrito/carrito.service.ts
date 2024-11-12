import { Injectable, NotFoundException, Inject  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrito } from './entities/carrito.entity';
import { ProductoCarrito } from '../producto-carrito/entities/producto-carrito.entity';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable()
export class CarritoService {
  constructor(
    @InjectRepository(Carrito) private carritoRepository: Repository<Carrito>,
    @InjectRepository(ProductoCarrito) private productoCarritoRepository: Repository<ProductoCarrito>,
    @Inject('COURSE_SERVICE') private readonly client: ClientProxy, // RabbitMQ client
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

  // Método que agrega un curso al carrito y actualiza el precio
  async addCurso(idCarrito: number, idCurso: number) {

    console.log("entre en carrito")

    // Solicitar el precio del curso
    const coursePriceResponse = await this.client.send({ cmd: 'get_course_price' }, { courseId: idCurso }).toPromise();
    const precioCurso = coursePriceResponse.precio;  

    // Agregar el curso al carrito
    const productoCarrito = new ProductoCarrito();
    productoCarrito.idCarrito = idCarrito;
    productoCarrito.idCurso = idCurso;
    await this.productoCarritoRepository.save(productoCarrito);

    // Obtener el carrito
    const carrito = await this.carritoRepository.findOneBy({ id: idCarrito });

    if (!carrito) {
      throw new Error('Carrito no encontrado');
    }

    // Actualizar el monto 
    carrito.monto += precioCurso;
    await this.carritoRepository.save(carrito);

    return carrito;  
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
