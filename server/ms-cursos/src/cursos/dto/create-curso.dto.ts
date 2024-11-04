 import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateCursoDto {
  @Field()
  nombre: string;

  @Field()
  descripcion: string;

  @Field(() => Float)
  precio: number;

  @Field()
  categoria: string;

  @Field(() => Float)
  rating: number;

  @Field()
  nivel: string;

  @Field()
  instructor: string;

  @Field()
  urlImagen: string;
}
