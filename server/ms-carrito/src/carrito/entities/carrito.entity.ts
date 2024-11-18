import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Carrito {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column()
  idUsuario: number;

  @Field(() => Float)
  @Column({ type: 'decimal', default: 0 })
  monto: number;

  @Field(() => String)
  @Column({ default: 'activo' })
  estado: string;  // activo, finalizado, cancelado
}
