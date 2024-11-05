import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class UpdateCursoDto {
    @Field({ nullable: true })
    nombre?: string;

    @Field({ nullable: true })
    descripcion?: string;

    @Field({ nullable: true })
    precio?: number;

    @Field({ nullable: true })
    categoria?: string;

    @Field({ nullable: true })
    rating?: number;

    @Field({ nullable: true })
    nivel?: string;

    @Field({ nullable: true })
    instructor?: string;

    @Field({ nullable: true })
    urlImagen?: string;
}
    
