import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Carrito {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idUsuario: number;

  @Column({ type: 'decimal', default: 0 })
  monto: number;

  @Column({ default: 'activo' })
  estado: string;  // activo, finalizado, cancelado
}
