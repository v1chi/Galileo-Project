import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class UpdateCursoDto {
    @Field()
    nombre?: string;

    @Field()
    descripcion?: string;

    @Field()
    precio?: number;

    @Field()
    categoria?: string;

    @Field()
    rating?: number;

    @Field()
    nivel?: string;

    @Field()
    instructor?: string;

    @Field()
    urlImagen?: string;
}
    
