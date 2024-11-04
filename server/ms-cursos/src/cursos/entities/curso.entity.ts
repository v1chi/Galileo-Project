import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Curso {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'varchar' })
  nombre: string;

  @Field()
  @Column({ type: 'varchar', nullable: false })
  descripcion: string;

  @Field(() => Float)
  @Column('decimal')
  precio: number;

  @Field()
  @Column()
  categoria: string;

  @Field(() => Float)
  @Column('decimal')
  rating: number;

  @Field()
  @Column()
  nivel: string;

  @Field()
  @Column()
  instructor: string;

  @Field()
  @Column()
  urlImagen: string;
}
