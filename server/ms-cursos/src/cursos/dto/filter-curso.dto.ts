import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class FilterCursoDto {
  @Field({ nullable: true })
  categoria?: string;

  @Field(() => Float, { nullable: true })
  minPrecio?: number;

  @Field(() => Float, { nullable: true })
  maxPrecio?: number;

  @Field({ nullable: true })
  nivel?: string;

  @Field({ nullable: true })
  nombre?: string;
}
