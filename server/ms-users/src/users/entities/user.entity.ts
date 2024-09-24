import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", unique: true })
  nombre: string;

  @Column({ type: "varchar", nullable: false })
  email: string;

  @Column({ type: "varchar", nullable: false })
  password: string;

  @Column({ type: "varchar", nullable: true })
  profesion: string;

  @Column({ type: "varchar", nullable: true })
  pais: string;

  @Column({ type: "varchar", nullable: true })
  genero: string;

  @Column({ type: "varchar", nullable: true })
  descripcion: string;

  @Column({ type: "varchar", nullable: true })
  profilePicture: string;

  @Column({ type: "bool", default: true })
  isActive: boolean;
}
