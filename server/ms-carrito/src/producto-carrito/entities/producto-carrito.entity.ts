import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class ProductoCarrito {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column()
  idCarrito: number;

  @Field(() => Int)
  @Column()
  idCurso: number;
}
