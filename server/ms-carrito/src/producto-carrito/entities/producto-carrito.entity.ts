import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ProductoCarrito {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idCarrito: number;

  @Column()
  idCurso: number;
}
