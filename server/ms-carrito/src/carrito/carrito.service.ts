import { Injectable, NotFoundException, Inject  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrito } from './entities/carrito.entity';
import { ProductoCarrito } from '../producto-carrito/entities/producto-carrito.entity';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';



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
    // Obtener el precio del curso desde el microservicio de cursos
    console.log("añadiendo curso al carrito", idCarrito);
    const cursoPrecio = await firstValueFrom(
      this.client.send<number>({ cmd: 'get_curso_precio' }, idCurso)
    ).catch(error => {
      throw new Error('Error al obtener el precio del curso: ' + error.message);
    });

    console.log("Precio recibido del curso:", cursoPrecio, "Tipo:", typeof cursoPrecio);

    // Verificar que cursoPrecio es un número
    const numericCursoPrecio = Number(cursoPrecio);
    if (isNaN(numericCursoPrecio)) {
      throw new Error('El precio del curso no es un número válido');
    }

    console.log("Precio actualizado ibido del curso:", numericCursoPrecio, "Tipo:", typeof numericCursoPrecio);

    // Agregar el curso al carrito
    const productoCarrito = new ProductoCarrito();
    productoCarrito.idCarrito = idCarrito;
    productoCarrito.idCurso = idCurso;
    await this.productoCarritoRepository.save(productoCarrito);

    // Obtener el carrito
    const carrito = await this.carritoRepository.findOneBy({ id: idCarrito });

    if (!carrito) {
      throw new NotFoundException('Carrito no encontrado');
    }

    console.log("Monto del carrito:", carrito.monto, "Tipo:", typeof carrito.monto);

    // Verificar y convertir el monto actual del carrito
    const numericMonto = Number(carrito.monto);
    if (isNaN(numericMonto)) {
      throw new Error('El monto del carrito no es un número válido');
    }
    

    // Actualizar el monto
    carrito.monto = numericCursoPrecio + numericMonto;
    await this.carritoRepository.save(carrito);

    console.log("nuevo precio carrito", carrito.monto);

    return carrito;
  }

  // Eliminar un curso de un carrito
  async removeCursoFromCarrito(idCarrito: number, idCurso: number): Promise<void> {
    const curso = await this.productoCarritoRepository.findOne({
      where: { idCarrito, idCurso },
    });

    if (!curso) {
      throw new NotFoundException('El curso no está en el carrito.');
    }

    // Obtener el precio del curso desde el microservicio de cursos
    const cursoPrecio = await firstValueFrom(
      this.client.send<number>({ cmd: 'get_curso_precio' }, idCurso)
    ).catch(error => {
      throw new Error('Error al obtener el precio del curso: ' + error.message);
    });

    console.log("Precio recibido del curso:", cursoPrecio, "Tipo:", typeof cursoPrecio);

    // Verificar que cursoPrecio es un número
    const numericCursoPrecio = Number(cursoPrecio);
    if (isNaN(numericCursoPrecio)) {
      throw new Error('El precio del curso no es un número válido');
    }

    await this.productoCarritoRepository.remove(curso);

    // Obtener el carrito
    const carrito = await this.carritoRepository.findOneBy({ id: idCarrito });

    if (!carrito) {
      throw new NotFoundException('Carrito no encontrado');
    }

    console.log("Monto del carrito:", carrito.monto, "Tipo:", typeof carrito.monto);

    // Verificar y convertir el monto actual del carrito
    const numericMonto = Number(carrito.monto);
    if (isNaN(numericMonto)) {
      throw new Error('El monto del carrito no es un número válido');
    }

    // Actualizar el monto
    carrito.monto = numericMonto - numericCursoPrecio;
    await this.carritoRepository.save(carrito);

    console.log("nuevo precio carrito", carrito.monto);
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

  // Método para obtener un carrito por ID
  async findOneById(id: number): Promise<Carrito> {
    // Busca el carrito por ID y retorna el resultado
    return this.carritoRepository.findOne({ where: { id } });
  }

  // Método para obtener todos los carritos
  findAll() {
    // Retorna todos los carritos
    return this.carritoRepository.find();
  }

}
