import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType() 
@Entity()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: "varchar"})
  nombre: string;

  @Field()
  @Column({ type: "varchar", nullable: false, unique: true  })
  email: string;

  @Field()
  @Column({ type: "varchar", nullable: false })
  password: string;

  @Field({ nullable: true })
  @Column({ type: "varchar", nullable: true })
  profesion: string;

  @Field({ nullable: true })
  @Column({ type: "varchar", nullable: true })
  pais: string;

  @Field({ nullable: true })
  @Column({ type: "varchar", nullable: true })
  genero: string;

  @Field({ nullable: true })
  @Column({ type: "varchar", nullable: true })
  descripcion: string;


  @Field(() => Boolean)
  @Column({ type: "bool", default: true })
  isActive: boolean;
}
