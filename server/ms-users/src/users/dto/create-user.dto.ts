import { InputType, Field } from '@nestjs/graphql';

@InputType()

export class CreateUserDto {
  @Field()
  nombre: string;

  @Field()
  email: string;

  @Field()
  password: string;
}