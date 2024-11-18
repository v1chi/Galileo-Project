import { InputType, Field } from '@nestjs/graphql';

@InputType()

export class UpdateUserDto {
  @Field({ nullable: true })
  nombre?: string

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  profesion?: string;

  @Field({ nullable: true })
  pais?: string;

  @Field({ nullable: true })
  genero?: string;

  @Field({ nullable: true })
  descripcion?: string;

}