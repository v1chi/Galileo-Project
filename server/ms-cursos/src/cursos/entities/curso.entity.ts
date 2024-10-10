import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Curso{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", unique: false })
    nombre: string;

    @Column({ type: "varchar", nullable: false })
    descripcion: string;

    @Column('decimal')
    precio: number;

    @Column()
    categoria: string;

    @Column('decimal')
    rating: number;
    
    @Column()
    nivel: string;

    @Column()
    instructor: string;

    @Column()
    urlImagen: string;

}